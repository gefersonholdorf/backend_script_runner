import { prisma } from "../database/prisma.ts";

export async function getExecutionService(id: number) {
    const execution = await prisma.executions.findUnique({
        where: {
            cd_execution: id
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
    })

    if(!execution) {
        throw new Error('Execução não encontrada!')
    }

    const system = execution.execution_status[0]?.databases.systems.ds_name
    const environments = execution.execution_status[0]?.databases.environments.ds_name
    const date = execution.dt_executed!.toISOString()

    const databases = execution.execution_status.map((status) => {
        const db = status.databases;

        return {
            id: db.cd_database,
            databaseName: db.ds_name,
            status: status.ds_status,
        };
    });

    return {
        id: execution.cd_execution,
        statusExecution: execution.ds_status!,
        executedBy: execution.ds_executed_by,
        createdBy: execution.ds_executed_by,
        system,
        environments,
        date,
        task: execution.scripts.ds_task,
        databases
    }
}