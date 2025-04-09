import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient();
export default globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}



/*
import { PrismaClient } from "@prisma/client"
 
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
 
export const prisma = globalForPrisma.prisma || new PrismaClient()
 
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

*/

/*

import { PrismaClient } from "@prisma/client/extension";
let prisma

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient
}
else {
    if (!global.prisma) {
        global.prisma = new PrismaClient
    }
    prisma = global.prisma
}

export default prisma

*/


