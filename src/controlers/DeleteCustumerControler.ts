import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustumerService } from '../services/DeleteCustumerService'

class DeleteCustumerControler{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.query as { id: string }
        const custumerService = new DeleteCustumerService();
        const custumer = await custumerService.execute({ id })

        reply.send(custumer);
    }
}

export { DeleteCustumerControler }