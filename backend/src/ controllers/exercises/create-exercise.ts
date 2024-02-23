import { FastifyRequest, FastifyReply } from "fastify";
import {
  CreateExerciseProps,
  CreateExerciseService,
} from "../../services/exercises/create-exercise";
import { ExerciseAlreadyExists } from '../../errors/exercise-already-exists'

export class CreateExerciseController {
  async handle(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { name, image, series, repetitions, category } =
        req.body as CreateExerciseProps;

      const create_exercise = new CreateExerciseService();

      await create_exercise.execute({
        name,
        image,
        series,
        repetitions,
        category,
      });

      return reply.status(201).send({
        message: "Exercise Created",
      });
    } catch (err) {
      if(err instanceof ExerciseAlreadyExists){
        return reply.status(409).send({error: 'Exercise Already exists'})
      }
    }
  }
}
