import fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes";
import { request } from "http";
import { REPL_MODE_SLOPPY } from "repl";

const app = fastify({ logger: true});

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message})
});

const start = async() => {

    await app.register(cors);
    await app.register(routes);
    

    try{
        await app.listen({ port: 3333})
    }catch(err){
        process.exit(1)
    }
}


start();