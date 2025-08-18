import { PrismaClient } from '@/lib/generated/prisma'

const globalForPrisma = globalThis

export const db =
	globalForPrisma.prisma ||
	new PrismaClient({
		log: ['query', 'error', 'warn'],
	})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
