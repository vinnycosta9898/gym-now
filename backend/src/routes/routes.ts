import { FastifyReply, FastifyRequest, FastifyInstance } from "fastify";

import { RegisterGymUserController } from "../ controllers/gym-user/register";
import { AuthenticateGymUserController } from "../ controllers/gym-user/authenticate";
import { DetailsGymUserController } from "../ controllers/gym-user/details";
import { DeleteGymUserController } from "../ controllers/gym-user/delete-user";

import { verifyJWT } from "../middlewares/verify-jwt";

export async function appRoutes(app: FastifyInstance){
  app.post('/sessions', async (req: FastifyRequest, reply:FastifyReply) => {
    return new RegisterGymUserController().handle(req, reply)
  })

  app.post('/users', async (req: FastifyRequest, reply:FastifyReply) => {
    return new AuthenticateGymUserController().handle(req, reply)
  })

  app.post('/details', { onRequest: [verifyJWT] },  async (req: FastifyRequest, reply:FastifyReply) => {
    return new DetailsGymUserController().handle(req, reply)
  })

  app.delete('/delete/:id', { onRequest: [verifyJWT] },  async (req: FastifyRequest, reply:FastifyReply) => {
    return new DeleteGymUserController().handle(req, reply)
  })

  
}