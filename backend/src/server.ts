import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient() // criando uma instancia do banco.

app.get('/hello', () => 'hello world!') // criando endpoint /hello.

app.get('/', async () => {
  const users = await prisma.user.findMany() // para acessar a tabela user

  return users
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server in port 3333')
  }) // para ouvir e da um retorno quando funcionar o servidor.
