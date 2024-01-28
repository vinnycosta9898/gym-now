import { FastifyReply } from "fastify";
import { FastifyRequest } from "fastify";
import { FastifyInstance } from "fastify";
import { RegisterGymUserController } from "../ controllers/gym-user/register";
import { AuthenticateGymUserController } from "../ controllers/gym-user/authenticate";

export async function appRoutes(app: FastifyInstance){
  app.post('/sessions', async (req: FastifyRequest, reply:FastifyReply) => {
    return new RegisterGymUserController().handle(req, reply)
  })

  app.post('/users', async (req: FastifyRequest, reply:FastifyReply) => {
    return new AuthenticateGymUserController().handle(req, reply)
  })

  app.post('/details', async (req: FastifyRequest, reply:FastifyReply) => {
    return new RegisterGymUserController().handle(req, reply)
  })
}