import { FastifyRequest, FastifyReply } from 'fastify'
import { AuthenticateGymUserProps, AuthenticateGymUserService } from '../../services/gym-user/authenticate'
import { UserNotExists } from '../../errors/user-not-exists'

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
      if(err instanceof UserNotExists){
        return reply.status(404).send({error: 'User not exists'})
      }else{
        return reply.status(403).send({error: 'Credentials Invalid'})
      }
    }
  }
}