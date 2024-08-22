import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustumerService } from "../services/CreateCustumerService";

class CreateCustumerControler{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { name, email} = request.body as { name: string, email: string};
        const custumerService = new CreateCustumerService();

        const custumer = await custumerService.execute({ name, email });

        reply.send(custumer);
    };
};

export { CreateCustumerControler};