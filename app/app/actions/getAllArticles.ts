import prisma from '@/lib/prismadb'




export default async function    (){
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
            
        
        })) // changing value of item createdAt in object
    
        return safeListing
    } catch (error) {
   throw new Error
    }
}