import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function memoriesRoute(app: FastifyInstance) {
  app.get('/memories', async () => {
    const memories = await prisma.memory.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    })

    return memories.map((memory) => ({
      id: memory.id,
      coverUrl: memory.coverURL,
      excerpt: memory.content.substring(0, 115).concat('...'),
    }))
  })

  app.get('/memory/:id', async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params) // pega o id e indica que é uma string

    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    })

    return memory
  })

  app.post('/memory', async (req) => {
    const bodySchema = z.object({
      content: z.string(),
      coverURL: z.string(),
      isPublic: z.coerce.boolean().default(false), // testa qualquer coisas que enviado se tem como transformar em bool
    })

    const { content, isPublic, coverURL } = bodySchema.parse(req.body)

    const memory = prisma.memory.create({
      data: {
        content,
        coverURL,
        isPublic,
        userId: 'fghdskiohnergqpouinrge',
      },
    })

    return memory
  })

  app.put('/memory/:id', async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const bodySchema = z.object({
      content: z.string(),
      coverURL: z.string(),
      isPublic: z.coerce.boolean().default(false), // testa qualquer coisas que enviado se tem como transformar em bool
    })

    const { content, isPublic, coverURL } = bodySchema.parse(req.body)

    const { id } = paramsSchema.parse(req.params)

    const memory = prisma.memory.update({
      data: {
        content,
        coverURL,
        isPublic,
        userId: 'fghdskiohnergqpouinrge',
      },
      where: {
        id,
      },
    })

    return memory
  })

  app.delete('/memory/:id', async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params) // pega o id e indica que é uma string

    await prisma.memory.delete({
      where: {
        id,
      },
    })
  })
}
