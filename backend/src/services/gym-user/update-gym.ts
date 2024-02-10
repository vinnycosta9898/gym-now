import { hash } from "bcryptjs";
import { prisma } from "../../lib/prisma";

export type UpdateGymProps = {
  gymId: string;
  name: string;
  email: string;
  password: string;
  cep: string;
};

export class UpdateGymService {
  async execute({ gymId, name, email, password, cep }: UpdateGymProps) {
    const gym = await prisma.gymUser.update({
      where: {
        id: gymId,
      },
      data: {
        name,
        email,
        password: await hash(password), s
        cep,
        cnpj: undefined,
      },
    });

    return {
      gym,
    };
  }
}
