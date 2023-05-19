import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoute } from './route/memories'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(memoriesRoute)

app.get('/hello', () => 'hello world!') // criando endpoint /hello.

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server in port 3333')
  }) // para ouvir e da um retorno quando funcionar o servidor.
