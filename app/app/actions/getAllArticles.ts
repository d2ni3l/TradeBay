import prisma from '@/lib/prismadb'




export default async function  (){

    try{
        const Allarticle = await prisma.article.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        }
           
        )
    
        return Allarticle;
    }catch(error){
  console.log(error)
    }
}