import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateGymProps, UpdateGymService } from "../../services/gym-user/update-gym";

export class UpdateGymController{
  async handle(req: FastifyRequest, reply:FastifyReply){
     try{
      const { gymId, name, email, password, cep } = req.body as UpdateGymProps

      const updateGym = new UpdateGymService()

      await updateGym.execute({
        gymId,
        name,
        email,
        password,
        cep
      })

      return reply.status(200)
     }catch(err){
      console.log(err)
    }
  }
}