import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  log: ['query'],
}) // criando uma instancia do banco
