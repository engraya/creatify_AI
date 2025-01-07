// import { PrismaClient } from "@prisma/client"
// import "server-only";

// declare global {
//   // eslint-disable-next-line no-var
//   var cachedPrisma: PrismaClient
// }

// export let prisma: PrismaClient
// if (process.env.NODE_ENV === "production") {
//   prisma = new PrismaClient()
// } else {
//   if (!global.cachedPrisma) {
//     global.cachedPrisma = new PrismaClient()
//   }
//   prisma = global.cachedPrisma
// }
import { PrismaClient } from "@prisma/client";
export const db = new PrismaClient();