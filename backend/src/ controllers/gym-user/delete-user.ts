import { FastifyRequest, FastifyReply } from 'fastify'
import { DeleteGymUserService, DeleteGymUserProps } from '../../services/gym-user/delete-user'

export class DeleteGymUserController{
  async handle(req: FastifyRequest, reply: FastifyReply){
    try{
      const { id } = req.body as DeleteGymUserProps

      const deleteGymUser = new DeleteGymUserService()

      await deleteGymUser.execute({
        id
      })
    }catch(err){
      return reply.status(500).send({ error: 'Internal Server Error'})
    } 
  }
}