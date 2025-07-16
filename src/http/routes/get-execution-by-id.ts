import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import z from "zod/v4";
import { getExecutionService } from "../../services/get-execution-service.ts";

export const getExecutionByIdRoute: FastifyPluginCallbackZod = (app) => {
    app.get('/executions/:id', {
        schema: {
            params: z.object({
                id: z.coerce.number()
            })
        },
    }, async (request, reply) => {
        const {id} = request.params

        try {
            const result = await getExecutionService(id)

            reply.status(200).send(result)

        } catch (error) {
            console.log(error)

            reply.status(400).send(error)
        }
    })
}