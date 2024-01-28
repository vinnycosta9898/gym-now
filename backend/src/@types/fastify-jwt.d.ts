import '@fastify/jwt'

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    gymUser: {
      sub: string
    }
  }
}
