import prismaClient from "../prisma";

interface DeleteCustumerProps{
    id: string;
}

class DeleteCustumerService{
    async execute({ id }: DeleteCustumerProps){

        if(!id){
            throw new Error("Invalida")
        }

        const findCustumer = await prismaClient.custumer.findFirst({
            where:{
                id: id
            }
        });

        if(!findCustumer){
            throw new Error("Cliente não encontrado!")
        }

        await prismaClient.custumer.delete({
            where:{
                id: findCustumer.id
            }
        })

        return { message: "Deletado com sucesso!"}
    }
}   

export { DeleteCustumerService }