import { FastifyRequest, FastifyReply } from 'fastify'
import { AuthenticateGymUserProps, AuthenticateGymUserService } from '../../services/gym-user/authenticate'

export class AuthenticateGymUserController{
  async handle(req: FastifyRequest, reply: FastifyReply){
    try{  
      const { email, password } = req.body as AuthenticateGymUserProps

      const authenticate = new AuthenticateGymUserService()

      await authenticate.execute({
        email,
        password
      })

      return reply.status(200)
    }catch(err){
      console.log(err)
    }
  }
}