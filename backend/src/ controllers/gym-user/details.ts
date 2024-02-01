import { FastifyRequest, FastifyReply } from 'fastify'
import { DetailsGymUserService } from '../../services/gym-user/details'

export class DetailsGymUserController{
  async handle(req: FastifyRequest, reply: FastifyReply){
    try{
      const details = new DetailsGymUserService()

      const { user } = await details.execute({
        id: req.user.sub,
      })
  
      return reply.status(200).send({
        ...user,
        password: undefined
      })
    }catch(err){
      console.log(err)
    }
  }
}