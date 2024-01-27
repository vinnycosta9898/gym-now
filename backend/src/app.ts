import fastify from 'fastify'
import { appRoutes } from './routes/routes'
import { env } from './env'
import { ZodError } from 'zod'

export const app = fastify({
  logger: true
})

app.register(appRoutes)

app.setErrorHandler((error, _request, reply) => {
  console.log('ERRO', _request)
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.log(error)
  }

  return reply.status(500).send({ message: 'Internal Server Error' })
})