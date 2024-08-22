import prismaClient from "../prisma";

interface CreateCustumerProps{
    name: string;
    email: string;
};

class CreateCustumerService{
    async execute({ name, email }: CreateCustumerProps){
        
        if(!name || !email){
            throw new Error("Preencha todos os campos")
        }


        const custumer = await prismaClient.custumer.create({
            data:{
                name,
                email,
                status: true
            }
        })

        return { custumer };
    };
};

export { CreateCustumerService };