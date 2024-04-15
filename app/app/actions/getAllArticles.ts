import prisma from '@/lib/prismadb'




export default async function  (){

    try{
        const allArticle = await prisma.article.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        }
           
        )

        const safeListing = allArticle.map((item) => ({
            
                ...item,
                createdAt: item.createdAt.toISOString()
            
        
        }))
    
        return safeListing
    }catch(error){
   throw new Error
    }
}