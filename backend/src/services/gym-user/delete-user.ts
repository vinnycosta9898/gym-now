import { prisma } from '../../lib/prisma'

type DeleteGymUserProps = {
  id: string
}

export class DeleteGymUser{
  async execute({ id } : DeleteGymUserProps){
    const user = await prisma.gymUser.delete({
      where:{
        id
      }
    })
  }
}