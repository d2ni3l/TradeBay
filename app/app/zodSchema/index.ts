import {z} from 'zod'



export const RegisterSchema = z.object({
  name: z.string().min(3),
  email: z.string().email({message: 'Invalid email'}),
  password: z.string().min(3, 'Password must be at least 3 characters').max(10, "Password can't be more than characters")
})

export const LoginSchema = z.object({
  email: z.string().email({message: 'Invalid email'}),
  password: z.string().min(3, 'Password must be at least 3 characters').max(10, "Password can't be more than characters")

})

export type RegistrationSchemaType = z.infer<typeof RegisterSchema>