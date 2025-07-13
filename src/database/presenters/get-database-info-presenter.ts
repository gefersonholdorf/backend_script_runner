import type { systems as System, databases as Databases, environments as Environments } from "../generated/prisma"

export type GetDatabaseInfoPresenterSchema = ({
    databases: ({
        environments: Environments;
    } & Databases)[];
} & System)[]

export class GetDatabaseInfoPresenter {
    static toHttp(getDatabasesInfo: GetDatabaseInfoPresenterSchema) {
        return getDatabasesInfo.map((data) => {
            return {
                systemName: data.ds_name,
                databases: data.databases.map((database) => {
                    return {
                        environments: database.environments.ds_name,
                        databaseName: database.ds_name
                    }
                })
            }
        })
    }
}