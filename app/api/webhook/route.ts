import { db } from "@/lib/db";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20" as Stripe.LatestApiVersion,
});

const CREDITS_PER_PURCHASE = 10000;
const DEFAULT_FREE_CREDITS = 10000;

export async function POST(req: Request) {
  const body = await req.text();
  const sig = headers().get("stripe-signature");

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type !== "checkout.session.completed") {
    return new NextResponse(null, { status: 200 });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const userId = session.metadata?.userId;

  if (!userId) {
    return new NextResponse("Missing userId in metadata", { status: 400 });
  }

  try {
    const existingUser = await db.user.findUnique({ where: { userId } });

    await db.$transaction([
      existingUser
        ? db.user.update({
            where: { userId },
            data: { totalCredit: { increment: CREDITS_PER_PURCHASE } },
          })
        : db.user.create({
            data: {
              userId,
              totalCredit: DEFAULT_FREE_CREDITS + CREDITS_PER_PURCHASE,
            },
          }),
      db.purchase.create({
        data: { userId, credit: CREDITS_PER_PURCHASE },
      }),
    ]);
  } catch (error) {
    console.error("Webhook DB error:", error);
    return new NextResponse("Database error", { status: 500 });
  }

  return new NextResponse(null, { status: 200 });
}
