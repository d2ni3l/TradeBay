import prisma from '@/lib/prismadb'
import {NextResponse} from 'next/server'



export default async function  POST(request: Request){

  const body = await request.json()  // get data from request

  const {title, description, price, condition, category, imgSrc} = body // decontructing data

  if (!title || !description || !price || !condition || !category || !imgSrc){
    return NextResponse.error()
  } 

  



 

}

