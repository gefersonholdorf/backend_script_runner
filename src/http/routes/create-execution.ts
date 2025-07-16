import type { MultipartFile } from "@fastify/multipart";
import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { CreateExecutionService } from "../../services/create-execution-service.ts";

export interface CreateExecutionRequest {
    createdBy: {value: string},
    task: {value: string},
    file: MultipartFile,
    system: {value: string},
    ambient: {value: string},
    databases: {value: string}
}

export const createExecutionRoute: FastifyPluginCallbackZod = async (app) => {

    const createExecutionService = new CreateExecutionService()

    app.post('/executions', async (request) => {
        const data = request.body as CreateExecutionRequest

        const result = await createExecutionService.createExecution(data)

        return {
            result
        }
    })
}