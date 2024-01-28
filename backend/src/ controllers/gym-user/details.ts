import { FastifyRequest, FastifyReply } from 'fastify'
import { DetailsGymUserService } from '../../services/gym-user/details'

export class DetailsGymUserController{
  async handle(req: FastifyRequest, reply: FastifyReply){
    try{
      const details = new DetailsGymUserService()

      const { gymUser } = await details.execute({
        id: req.gymUser.sub,
      })
  
      return reply.status(200).send({
        ...gymUser,
        password: undefined
      })
    }catch(err){
      console.log(err)
    }
  }
}