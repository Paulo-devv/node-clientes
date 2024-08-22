import prismaClient from "../prisma";

class ListCustumerService{
    async execute(){
        const custumer = await prismaClient.custumer.findMany()

        return custumer;
    }
}

export {  ListCustumerService }