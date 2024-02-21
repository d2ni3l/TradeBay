import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import prisma from "@/lib/prismadb";


export async function POST(request: Request){


    const body = await request.json();
    const { 
      email,
      name,
      password,
     } = body;

     if(!name || !email || !password){
        return NextResponse.json({msg : 'Invalid Data', status : 422})
     }

   const existingUser = await prisma.user.findUnique({
    where:{
      email: email
    }
   })

   if(existingUser){
    
     return NextResponse.json({ error: 'User already exists' }, { status: 422 })
     
   }
      
     const hashedPassword = await bcrypt.hash(password, 12);

  
     const user = await prisma.user.create({ 
      data: {
        email,
        name,
        hashedPassword,
      }
    });
  
    return NextResponse.json(user,);

    
}