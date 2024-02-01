import { FastifyRequest, FastifyReply } from 'fastify'
import { AuthenticateGymUserProps, AuthenticateGymUserService } from '../../services/gym-user/authenticate'

export class AuthenticateGymUserController{
  async handle(req: FastifyRequest, reply: FastifyReply){
    try{  
      const { email, password } = req.body as AuthenticateGymUserProps

      const authenticate = new AuthenticateGymUserService()

      const { user } = await authenticate.execute({
        email,
        password
      })

      const token = await reply.jwtSign(
        {},
        {
          sign: {
            sub: user.id,
          },
        },
      )

      return reply.status(200).send({
        id: user.id,
        name: user.name,
        email: user.email,
        token
      })
    }catch(err){
      console.log(err)
    }
  }
}