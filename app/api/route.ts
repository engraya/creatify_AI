import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
export async function POST(req: Request) {
  try {
    const user = await currentUser();

    const userId  = user?.id

    if (!userId) {
      return new NextResponse("User Not Authenticated", { status: 401 });
    }

    const { title, description, templateUsed } = await req.json();

    const createNewDoc = await db.aIOutput.create({
      data: {
        userId: userId,
        title: title,
        description: description,
        templateUsed: templateUsed,
      },
    });

    revalidatePath("/");

    return NextResponse.json(createNewDoc, { status: 200 });
  } catch (error) {
    return new NextResponse("POST, NEW DOC ERROR", { status: 500 });
  }
}