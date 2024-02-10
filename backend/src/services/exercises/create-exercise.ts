import { Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma";

type CreateExerciseProps = Prisma.ExercisesCreateInput;

export class CreateExerciseService {
  async execute({ ...props }: CreateExerciseProps) {
    if (!props.name) {
      throw new Error("Exercise not valid");
    }

    const hasExerciseWithSameName = await prisma.exercises.findFirst({
      where: {
        name: props.name,
      },
    });

    if (hasExerciseWithSameName) {
      throw new Error("Exercise has exists");
    }

    if (props.repetitions || props.series <= 0) {
      throw new Error("Exercise not valid");
    }

    const exercise = await prisma.exercises.create({
      data: {
        name: props.name,
        image: props.image,
        series: props.series,
        repetitions: props.repetitions,
        category: props.category,
      },
    });

    return {
      exercise,
    };
  }
}
