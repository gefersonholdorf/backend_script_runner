import type { MultipartFile } from "@fastify/multipart";
import type { CreateExecutionRequest } from "../http/routes/create-execution.ts";
import { prisma } from "../database/prisma.ts";

interface CreateScriptSchema {
    file: MultipartFile
    createdBy: string
    task: string
}

export class CreateExecutionService {

    async createExecution(data: CreateExecutionRequest) {
        await this.createScript({
            file: data.file,
            createdBy: data.createdBy.value,
            task: data.task.value
        })
    }
    
    async createScript({file, createdBy, task}: CreateScriptSchema) {
        const buffer = await file.toBuffer()
        const content = buffer.toString('utf-8')

        const currentDate = new Date().toISOString()
        console.log(currentDate)
        const nameScript = `${task}-${currentDate}`

        await prisma.scripts.create({
            data: {
                ds_created_by: createdBy,
                ds_task: task,
                ds_content: content,
                ds_name: nameScript
            }
        })
    }
}