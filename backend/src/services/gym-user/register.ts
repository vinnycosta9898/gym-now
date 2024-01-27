import { Prisma } from '@prisma/client'
import { prisma } from '../../lib/prisma'
import { hash } from 'bcryptjs'

type RegisterGymUserProps = Prisma.GymUserCreateInput

export class RegisterGymUserService{
  async execute({ ...props }){
    const hasUserWithSameEmail = await prisma.gymUser.findUnique({
      where:{
        email: props.email
      }
    })

    if(hasUserWithSameEmail){
      throw new Error('User already exists')
    }

    const password_hash = await hash(props.password, 8)

    const user = await prisma.gymUser.create({
      data:{
        name: props.name,
        email: props.email,
        password: password_hash,
        cnpj: props.cnpj,
        cep: props.cep
      },
      select:{
        id: true
      }
    })

    return {
      user
    }
  }
}