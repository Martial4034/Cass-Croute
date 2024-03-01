import { z } from "zod"

export const AuthCredentialsValidator = z.object({
  email: z.string().email('Votre email saisi est invalide.'),
  password: z.string().min(10, {
    message: 'Votre mot de passe doit contenir au moins 10 caractères.',
  }),
})

export type TAuthCredentialsValidator = z.infer<
  typeof AuthCredentialsValidator
>
