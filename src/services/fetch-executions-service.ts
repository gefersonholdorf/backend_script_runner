import { prisma } from "../database/prisma.ts";
import type { PaginationParams } from "../types/pagination-params.ts";

export async function fetchExecutionsService(pagination: PaginationParams) {
    const {
        page = 1,
        quantity = 8,
        orderBy = 'cd_execution',
        orderDirection = 'desc'
    } = pagination

    try {
        const executions = await prisma.executions.findMany({
            skip: (page - 1) * quantity,
            take: quantity,
            orderBy: {
                [orderBy]: orderDirection
            },
            include: {
                scripts: true,
                execution_status: {
                    include: {
                        databases: {
                            include: {
                                systems: true,
                                environments: true
                            }
                        }
                    }
                }
            }
        });

        const total = await prisma.executions.count()

        const totalPages = Math.ceil(total / quantity)

        const data = executions.map((execution) => {
            const system = execution.execution_status[0]?.databases.systems.ds_name
            const environments = execution.execution_status[0]?.databases.environments.ds_name
            const date = execution.dt_executed!.toISOString()

            return {
                id: execution.cd_execution,
                statusExecution: execution.ds_status!,
                executedBy: execution.ds_executed_by,
                createdBy: execution.ds_executed_by,
                system,
                environments,
                date,
                task: execution.scripts.ds_task,
            }
        })

        return {
            page,
            quantity,
            total,
            totalPages,
            orderBy,
            orderDirection,
            data 
        }
    } catch (error) {
      console.log(error)
      throw new Error('Erro ao buscar executions!')  
    }
}