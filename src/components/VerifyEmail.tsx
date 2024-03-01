"use client"

import { trpc } from "@/trpc/client"
import { Loader2, XCircle } from "lucide-react"
import Image from "next/image"
import { buttonVariants } from "./ui/button"
import Link from "next/link"

interface VerifyEmailProps {
    token: string
}

const VerifyEmail = ({ token }: VerifyEmailProps) => {
    const { data, isLoading, isError} =
        trpc.auth.verifyEmail.useQuery({
            token,
    })

    if(isError) {
        return <div className="flex flex-col items-center gap-3">
            <XCircle className="h-10 w-10 text-red-600" />
            <h3 className="font-semibold text-xl">Un probleme est survenu</h3>
            <p className="text-muted-foreground text-sm text-center">
                Le token est invalide ou a expiré.
                Réessayez en demandant un nouveau lien.
                
            </p>
            
        </div>
    }

    if(data?.success) {
        return (
            <div className="flex h-full flex-col items-center justify-center">
                <div className="relative w-64 h-64">
                    <Image
                        src="/Mail-sent.png"
                        fill
                        style={{ objectFit: "contain" }}
                        alt="Email Sent to you"
                        quality={80} 
                    />
                </div>

                <h3 className="font-semibold text-2xl">Votre email à bien été vérifié !</h3>
                <p className="text-muted-foreground text-center mt-1">
                    Merci de votre confiance.
                </p>

                <Link className={
                    buttonVariants({className: "mt-4"})
                } href="/sign-in">
                    Connectez-vous
                </Link>
            </div>
        )
    }

    if(isLoading) {
        return <div className="flex flex-col items-center gap-3">
            <Loader2 className="animate-spin h-10 w-10 text-zinc-300"/>
            <h3 className="font-semibold text-xl">Vérification de votre compte</h3>
            <p className="text-muted-foreground text-sm text-center">
                Nous vérifions actuellement votre compte.
                Si le chargement est trop long : Rechargez la page.
            </p>
        </div>
    }
}

export default VerifyEmail