import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { getDatabaseInfo } from "../../services/get-database-info.ts";

export const getDatabaseInfoRoute: FastifyPluginCallbackZod = (app) => {
    app.get('/databases', async () => {
        const info = await getDatabaseInfo()

        return info
    })
}