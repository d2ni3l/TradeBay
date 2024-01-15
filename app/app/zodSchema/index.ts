import {z} from 'zod'



export const RegisterSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(3).max(10, 'Password must be at least 10 characters')
})

export type RegistrationSchemaType = z.infer<typeof RegisterSchema>