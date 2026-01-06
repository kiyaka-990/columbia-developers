import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    // In Prisma 7, you must explicitly pass the connection string here
    // if it's not in a prisma.config.ts file
    datasourceUrl: process.env.DATABASE_URL, 
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;