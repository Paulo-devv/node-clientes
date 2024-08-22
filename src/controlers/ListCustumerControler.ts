import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustumerService } from '../services/ListCustumerService'

class ListCustumerControler{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listCustumerService = new ListCustumerService();

        const custumer = await listCustumerService.execute();

        reply.send(custumer);
    }
}

export { ListCustumerControler }