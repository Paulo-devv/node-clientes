import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { request } from "http";
import { ListCustumerControler } from "./controlers/ListCustumerControler";
import { DeleteCustumerControler } from "./controlers/DeleteCustumerControler"

import { CreateCustumerControler } from "./controlers/CreateCustumerControler";
export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get('/teste', async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true };
    });

    fastify.post ('/custumer', async(request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustumerControler().handle(request, reply);
    });

    fastify.get ('/custumers', async(request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustumerControler().handle(request, reply);
    });

    fastify.delete ('/custumer', async(request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustumerControler().handle(request, reply);
    });
};