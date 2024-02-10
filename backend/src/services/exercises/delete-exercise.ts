import { prisma } from "../../lib/prisma";

type DeleteExerciseProps = {
  exerciseId: string;
};

export class DeleteExerciseService {
  async execute({ exerciseId }: DeleteExerciseProps) {
    const exercise = await prisma.exercises.delete({
      where: {
        id: exerciseId
      }
    })
  }
