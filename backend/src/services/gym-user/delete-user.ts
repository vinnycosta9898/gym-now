import { prisma } from '../../lib/prisma'

export type DeleteGymUserProps = {
  id: string
}

export class DeleteGymUserService{
  async execute({ id } : DeleteGymUserProps){
    const user = await prisma.gymUser.delete({
      where:{
        id
      }
    })
  }
}