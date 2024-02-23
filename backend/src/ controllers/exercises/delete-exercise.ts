import { FastifyRequest, FastifyReply } from "fastify";
import {
  DeleteExerciseService,
  DeleteExerciseProps,
} from "../../services/exercises/delete-exercise";

export class DeleteExerciserController {
  async handle(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { exerciseId } = req.body as DeleteExerciseProps;

      const deleteGymUser = new DeleteExerciseService();

      await deleteGymUser.execute({
        exerciseId,
      });
    } catch (err) {
      return reply.status(500).send({ error: 'Internal Server Error'})
    }
  }
}
