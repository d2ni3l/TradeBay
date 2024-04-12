import prisma from '@/lib/prismadb'
import {NextResponse} from 'next/server'
import getCurrentUser from '@/app/actions/getCurrentUser'


export async function POST(request: Request){

  const body = await request.json()  // get data from request

  const {title, description, price, condition, category, imgSrc} = body // decontructing data

  if (!title || !description || !price || !condition || !category || !imgSrc){
    return NextResponse.json({error : 'Data missing'}, {status: 400})
  } 



  const currentUser = await getCurrentUser()

  if(!currentUser){
    return NextResponse.json({error: 'Not signed in'})
  }

  const postArticle = await prisma.article.create({
    data:{
      title,
      description,
      price,
      category,
      imgSrc,
      condition,
      userId: currentUser.id

    }
  })  // creating new article listing

  return NextResponse.json(postArticle)





 

}

