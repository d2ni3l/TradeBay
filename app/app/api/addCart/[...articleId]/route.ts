import { NextResponse } from "next/server";
import prisma from '@/lib/prismadb'
import getCurrentUser from "@/app/actions/getCurrentUser";


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
        cartIds : cartIds
     }

    })

    return NextResponse.json(addCart)
}


export default async function DELETE({params}: {params: {articleId: string}}){


    const currentUser = await getCurrentUser()

    const {articleId} = params



    if(!currentUser?.email){
        return NextResponse.json({error: 'Not Signed In'})
    }
// remove an array value  thats == articleId 

    const favoriteIds = currentUser.cartIds.filter( function(id)
    {
        return id !== articleId
    })

    const updatedUser = await prisma.user.update({
        where: {
            id: currentUser.id
          },
          data: {
            favoriteIds
          }  
    })

    return NextResponse.json(updatedUser)
}