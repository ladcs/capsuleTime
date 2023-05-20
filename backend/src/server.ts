import fastify from 'fastify'
import cors from '@fastify/cors'
import 'dotenv/config'
import { memoriesRoute } from './route/memories'
import jwt from '@fastify/jwt'
import { authRoutes } from './route/auth'

const app = fastify()

app.register(jwt, {
  secret: 'um segredo qualquer',
})

app.register(cors, {
  origin: true,
})

app.register(authRoutes)
app.register(memoriesRoute)

app.get('/hello', () => 'hello world!') // criando endpoint /hello.

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server in port 3333')
  }) // para ouvir e da um retorno quando funcionar o servidor.
