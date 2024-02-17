import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };


// nextjs hot reload may cause excessive instances of PrismaClient
 const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV != "production") globalForPrisma.prisma;

export default prisma