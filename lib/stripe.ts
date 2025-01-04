import Stripe from "stripe"
// @ts-ignore
export const stripe = new Stripe(process.env.STRIPE_API_KEY || undefined, {
  apiVersion: "2024-04-10",
  typescript: true,
})
