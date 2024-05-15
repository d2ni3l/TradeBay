import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";


export default async function POST(request: Request){
 
    const article = request.json()

    const currentUser = await getCurrentUser()

  if(!currentUser){
    return NextResponse.json({error: 'Not signed in'})
  }

//   const addTocart = prisma.cart.create({
//     data:{
//         userId: currentUser.id,
      
//     }
//   })


}