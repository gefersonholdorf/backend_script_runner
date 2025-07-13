import { GetDatabaseInfoPresenter } from "../database/presenters/get-database-info-presenter.ts";
import { prisma } from "../database/prisma.ts";

export async function getDatabaseInfo() {
    const info = await prisma.systems.findMany({
        include: {
            databases: {
                include: {
                    environments: true
                }
            }
        }
    })

    const result = GetDatabaseInfoPresenter.toHttp(info)

    return result
}