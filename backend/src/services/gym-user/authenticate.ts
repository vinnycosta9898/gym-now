import { compare } from "bcryptjs"
import { prisma } from "../../lib/prisma"

type AuthenticateGymUserProps = {
  email: string
  password: string
}

export class AuthenticateGymUser{
  async execute({ email, password } : AuthenticateGymUserProps){
    const user = await prisma.gymUser.findUnique({
      where:{
        email
      }
    })

    if(!user){
      throw new Error('Credentials Invalid')
    }

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch){
      throw new Error("Credentials invalid")
    }

    return{
      user
    }
  }
}