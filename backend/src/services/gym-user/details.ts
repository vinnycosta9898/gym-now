import { prisma } from '../../lib/prisma'

export type DetailsGymUserProps = {
  id: string
}

export class DetailsGymUserService{
  async execute({ id } : DetailsGymUserProps){
    const gymUser = await prisma.gymUser.findFirst({
      where:{
        id
      }
    })

    if(!gymUser){
      throw new Error('Resource not found')
    }

    return {
      gymUser
    }
  }
}