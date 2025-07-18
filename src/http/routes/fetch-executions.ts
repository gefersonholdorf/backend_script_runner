import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import z from "zod/v4";
import { fetchExecutionsService } from "../../services/fetch-executions-service.ts";
import type { PaginationParams } from "../../types/pagination-params.ts";

export const fetchExecutionsRoute: FastifyPluginCallbackZod = (app) => {
    app.get('/executions', {
        schema: {
            querystring: z.object({
                page: z.coerce.number().optional(),
                quantity: z.coerce.number().optional(),
                system: z.string().optional()
            })
        },
    }, async (request, reply) => {
        const { page, quantity, system } = request.query

        const pagination: PaginationParams = {
            page, quantity
        }

        try {
            const result = await fetchExecutionsService(pagination)

            reply.status(200).send(result)

        } catch (error) {
            console.log(error)

            reply.status(400).send(error)
        }
    })
}