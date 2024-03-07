import { getServerSession } from "next-auth";
import prisma from "@/lib/prismadb";
import { authOptions  } from "../utils/authOptions";

const  getSession = async () => {
    return  await  getServerSession(authOptions)
}



const getCurrentUser = async () => {

    try{

       const session = await getSession()

       if(!session?.user?.email){
        return null
       }
  

       // checking prisma to validate user with database 
       const user = await prisma.user.findUnique({
        where: {
            email: session.user.email
        }
       });

      if(!user){
        return null
      }


      // returning user but changing Date properties
      return {
        ...user,
        createdAt : user.createdAt.toISOString(),
        emailVerified: user.emailVerified?.toISOString(),
        updatedAt: user.updatedAt.toISOString(),



      }

    }catch(error){

    }
}

export default getCurrentUser;