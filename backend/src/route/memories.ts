import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function memoriesRoute(app: FastifyInstance) {
  app.addHook('preHandler', async (req) => {
    await req.jwtVerify()
  })

  app.get('/memories', async (req) => {
    const memories = await prisma.memory.findMany({
      where: {
        userId: req.user.sub,
      },
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

  app.get('/memory/:id', async (req, res) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params) // pega o id e indica que é uma string

    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    })

    if (!memory.isPublic && memory.userId !== req.user.sub) {
      return res.status(401).send()
    }

    return memory
  })

  app.post('/memory', async (req, reply) => {
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
        userId: req.user.sub,
      },
    })

    return memory
  })

  app.put('/memory/:id', async (req, res) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params)

    let memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    })

    if (memory.userId !== req.user.sub) {
      return res.status(401).send()
    }

    const bodySchema = z.object({
      content: z.string(),
      coverURL: z.string(),
      isPublic: z.coerce.boolean().default(false), // testa qualquer coisas que enviado se tem como transformar em bool
    })

    const { content, isPublic, coverURL } = bodySchema.parse(req.body)
    memory = await prisma.memory.update({
      where: {
        id,
      },
      data: {
        content,
        coverURL,
        isPublic,
      },
    })

    return memory
  })

  app.delete('/memory/:id', async (req, res) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params) // pega o id e indica que é uma string
    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    })

    if (memory.userId !== req.user.sub) {
      return res.status(401).send()
    }

    await prisma.memory.delete({
      where: {
        id,
      },
    })
  })
}
