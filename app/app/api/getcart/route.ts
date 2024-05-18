import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";


export async function POST(request: Request){
 

    const currentUser = await getCurrentUser()

  if(!currentUser?.email){
    return NextResponse.json({error: 'Not signed in'})
  }

  
  // gets article which id matches favoriteIds
  
  const getCart = await prisma.article.findMany({
    where:{
      id:{
        in: [...(currentUser.favoriteIds || [])]
      }
    }
  })





  return NextResponse.json('')


}