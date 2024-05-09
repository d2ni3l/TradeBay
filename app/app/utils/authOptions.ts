import prisma from '@/lib/prismadb'
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import    CredentialsProvider from 'next-auth/providers/credentials'
import { NextAuthOptions } from 'next-auth'

export const authOptions : NextAuthOptions = {
    adapter : PrismaAdapter(prisma),

    providers:[
        CredentialsProvider({

            name: 'Credentials',

            credentials: {
                email : {label : 'email', type: 'text', placeholder: 'johndoe@gmail.com'},
                password : {label : 'password', type: 'password' }
            },

            // authorize credentials
            async authorize(credentials) : Promise<any>{
            
                if(!credentials?.email || !credentials?.password){
            throw new Error('Invalid Data') 
        }; 

        const user = await prisma.user.findUnique({
            where: {
                email : credentials?.email
            }
        });

    


        if (!user){
            throw new Error('Account not found')
        }

        if(!user.hashedPassword){
            throw new Error
        }

        // const passwordMatch = bcrypt.compare(credentials.password, user.hashedPassword)

        // if(!passwordMatch){
        //     throw new Error
        // }

        return user
            }


        })
    ],

    secret: process.env.NEXTAUTH_SECRET,

    session: {
        strategy: 'jwt'
    },

    debug : process.env.NODE_ENV === 'development'

    
}