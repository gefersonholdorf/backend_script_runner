import type { MultipartFile } from "@fastify/multipart";
import type { CreateExecutionRequest } from "../http/routes/create-execution.ts";
import { prisma } from "../database/prisma.ts";

type TransactionClient = Parameters<Parameters<typeof prisma.$transaction>[0]>[0];

interface CreateScriptSchema {
    file: MultipartFile
    createdBy: string
    task: string
    tx: TransactionClient
}

interface CreateExecutionRegisterSchema {
    scriptId: number
    createdBy: string
    tx: TransactionClient
}

interface CreateExecutionDatabasesSchema {
    executionId: number
    databases: {
        id: number,
        name: string
    }[]
    tx: TransactionClient
}

export class CreateExecutionService {
    async createExecution(data: CreateExecutionRequest) {
        let executionId: number
        let databasesExecutionIds: number[]

        await prisma.$transaction(async (tx) => {
            const newScript = await this.createScript({
                file: data.file,
                createdBy: data.createdBy.value,
                task: data.task.value,
                tx
            })

            const newExecution = await this.createExecutionRegister({
                createdBy: data.createdBy.value,
                scriptId: newScript.cd_script,
                tx
            })

            executionId = newExecution.cd_execution

            const newExecutionStatus = await this.createExecutionDatabases({
                executionId: newExecution.cd_execution,
                databases: JSON.parse(data.databases.value),
                tx
            })

            databasesExecutionIds = newExecutionStatus
        })

        return executionId!

        // //Chamada para a automação N8N
        // const n8nExecution = await fetch('https://automacao.lusati.com.br/webhook-test/4fdd99d5-4a3c-438d-85a9-59bf6a9006c7', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         executionId: executionId!,
        //         databasesExecutionIds: databasesExecutionIds!
        //     })
        // })

        // await this.monitoringExecution(executionId!)

        // console.log('Execução realizada com sucesso!')
    }
    
    async createScript({file, createdBy, task, tx}: CreateScriptSchema) {
        const buffer = await file.toBuffer()
        const content = buffer.toString('utf-8')

        const currentDate = new Date().toISOString()
        const nameScript = `${task}-${currentDate}`

        return await tx.scripts.create({
            data: {
                ds_created_by: createdBy,
                ds_task: task,
                ds_content: content,
                ds_name: nameScript
            }
        })
    }

    async createExecutionRegister({ scriptId, createdBy, tx}: CreateExecutionRegisterSchema) {
        return await tx.executions.create({
            data: {
                cd_script: scriptId,
                ds_executed_by: createdBy
            }
        })
    }

    async createExecutionDatabases({ executionId, databases, tx}: CreateExecutionDatabasesSchema) {
        let databasesStatusId: number[] = []
        for(const db of databases) {
            const executionStatusId = await tx.execution_status.create({
                data: {
                    cd_execution: executionId,
                    cd_database:db.id,
                }       
            })

            databasesStatusId.push(executionStatusId.cd_execution_status)
        }

        return databasesStatusId
    }

    async monitoringExecution(executionId: number) {
        let isRunning = false

        const interval = setInterval(async () => {
            if (isRunning) return

            console.log('Rodando')

            isRunning = true

            try {
                const execution = await prisma.executions.findUnique({
                    where: {
                        cd_execution: executionId
                    }
                })

                if(execution?.ds_status === 'SUCCESS' || execution?.ds_status === 'FAILURE') {
                    console.log('Execução OK')
                    clearInterval(interval)
                }
            } catch (error) {
                throw new Error('Error database!')
            } finally {
                isRunning = false
            }

        }, 3000)
    }
}