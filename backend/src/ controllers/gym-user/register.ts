import { FastifyRequest, FastifyReply } from 'fastify'
import { RegisterGymUserProps, RegisterGymUserService } from '../../services/gym-user/register'

export class RegisterGymUserController {
  async handle(req: FastifyRequest, reply: FastifyReply) {
    try{
      const { name, email, password, cnpj, cep } = req.body as RegisterGymUserProps

      const register = new RegisterGymUserService()

      await register.execute({
        name, 
        email,
        password,
        cnpj,
        cep
      })

      return reply.status(201).send({message: 'User created'})
    }catch(err){
      console.log(err)
    }
  }
}