import fastifyCors from "@fastify/cors"
import fastify from "fastify"
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from "fastify-type-provider-zod"
import { env } from "./env.ts"
import { prisma } from "./database/prisma.ts"
import { getDatabaseInfoRoute } from "./http/routes/get-database-info.ts"

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
    origin: 'http://127.0.0.1:5173'
})

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get("/health", async (_request, reply) => {
    const apiStatus = "up";

    let dbStatus: "up" | "down" = "up";
    try {
      await prisma.$queryRaw`SELECT 1;`;
    } catch (err) {
      app.log.error(err);
      dbStatus = "down";
    }

    return reply.status(200).send({
      api: apiStatus,
      database: dbStatus,
      checkedAt: new Date().toISOString(),
    });
  });

app.register(getDatabaseInfoRoute)

app.listen({port: env.PORT})