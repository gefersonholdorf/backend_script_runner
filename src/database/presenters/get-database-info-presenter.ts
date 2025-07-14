import type { systems as System, databases as Databases, environments as Environments } from "../generated/prisma"

export type GetDatabaseInfoPresenterSchema = ({
    databases: ({
        environments: Environments;
    } & Databases)[];
} & System)[]

export class GetDatabaseInfoPresenter {
  static toHttp(getDatabasesInfo: GetDatabaseInfoPresenterSchema) {
    return {
      systems: getDatabasesInfo.map((system) => ({
        systemId: system.cd_system,
        systemName: system.ds_name,
        databases: system.databases.map((database) => ({
          databaseId: database.cd_database,
          databaseName: database.ds_name,
          environmentName: database.environments.ds_name
        })),
      })),
    };
  }
}