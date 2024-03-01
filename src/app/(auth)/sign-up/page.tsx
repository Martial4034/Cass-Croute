'use client'

import { Icons } from '@/components/Icons'
import {
  Button,
  buttonVariants,
} from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

import {
  AuthCredentialsValidator,
  TAuthCredentialsValidator,
} from '@/lib/validators/account-credentials-validators'
import { trpc } from '@/trpc/client'
import { ZodError } from 'zod'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'


const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  })

  const router = useRouter()

  const { mutate, isLoading } =
    trpc.auth.createPayloadUser.useMutation({
      onError: (err) => {
        if(err.data?.code === 'CONFLICT') {
          toast.error('Cette adresse email est déjà utilisée')
          return
        }

        if(err instanceof ZodError) {
          toast.error(err.issues[0].message)
          return
        }

        toast.error('Une erreur est survenue, veuillez réessayer plus tard')
      },
      onSuccess: ({sentToEmail}) => {
        toast.success(`Un email de vérification a été envoyé à ${sentToEmail}`)
        router.push('/verify-email?to=' + sentToEmail)
      }

    })


  const onSubmit = ({
    email,
    password,
  }: TAuthCredentialsValidator) => {
    mutate({ email, password })
  }

  return (
    <>
      <div className='container relative flex pt-20 flex-col items-center justify-center lg:px-0'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col items-center space-y-2 text-center'>
            <Icons.logo className='h-20 w-20' />
            <h1 className='text-2xl font-semibold tracking-tight'>
              Créez vous un compte
            </h1>

            <Link
              className={buttonVariants({
                variant: 'link',
                className: 'gap-1.5',
              })}
              href='/sign-in'>
              Vous avez déjà un compte ? Connectez vous
              <ArrowRight className='h-4 w-4' />
            </Link>
          </div>

          <div className='grid gap-6'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='grid gap-2'>
                <div className='grid gap-1 py-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    {...register('email')}
                    className={cn({
                      'focus-visible:ring-red-500':
                        errors.email,
                    })}
                    placeholder='prenom@exemple.com'
                  />
                  {errors?.email && ( 
                  <p className='text-red-500 text-sm mt-2'>{errors.email.message}</p>
                  )}
                </div>

                <div className='grid gap-1 py-2'>
                  <Label htmlFor='password'>Mot de passe</Label>
                  <Input
                    {...register('password')}
                    type='password'
                    className={cn({
                      'focus-visible:ring-red-500':
                        errors.password,
                    })}
                    placeholder='mot de passe'
                  />
                  {errors?.password && (
                    <p className='text-red-500 text-sm mt-2'>
                      {errors.password.message}
                    </p>
                  )}
                </div>
 
                <Button>S&apos;inscrire</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
