import { PrismaClient } from '@prisma/client';

/**
 * Standard Prisma Client initialization for Next.js 14+.
 * Handles the "too many connections" error during development Fast Refresh.
 */

const prismaClientSingleton = () => {
  // If you are using a specific environment variable name, 
  // ensure it is defined in your .env file as DATABASE_URL.
  return new PrismaClient({
    log: ['query', 'error', 'warn'],
  });
};

const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;