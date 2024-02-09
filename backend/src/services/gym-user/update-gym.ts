import { string } from "zod"
import { prisma } from "../../lib/prisma"

type UpdateGymProps = {
  gymId: string
  name: string
  email: string
  password: string
  cep: string
}


export class UpdateGymService{
  async execute({ gymId, name, email, password, cep } : UpdateGymProps){
    const gym = await prisma.gymUser.update({
      where:{
        id: gymId
      },
      data:{
        name, 
        email,
        password,
        cep,
        cnpj: undefined
      }
    })

    return {
      gym
    }
  }
}