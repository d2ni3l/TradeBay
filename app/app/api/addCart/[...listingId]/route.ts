import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";




export async function POST (request: Request, {params} : {params : {cartId: string}}){
    const currentUser = await getCurrentUser()


    const {cartId} = params

    if(!currentUser){
        return NextResponse.json({error: 'User not signed In'})

    }


    // spreading favorite id inside new array
    let cartIds = [...(currentUser.cartIds || [])]

    cartIds.push(cartId)

// adding Cartid into user list of favorite ids
    const addCart = await prisma.user.update({
     where:{
        id: currentUser.id
     },
     data: {
        cartIds
     }

    })

    return NextResponse.json(addCart)
}