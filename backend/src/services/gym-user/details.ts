import { prisma } from '../../lib/prisma'

export type DetailsGymUserProps = {
  id: string
}

export class DetailsGymUserervice{
  async execute({ id } : DetailsGymUserProps){
    const user = await prisma.gymUser.findFirst({
      where:{
        id
      }
    })

    if(!user){
      throw new Error('Resource not found')
    }

    return {
      user
    }
  }
}