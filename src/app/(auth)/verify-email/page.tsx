import { Icons } from "@/components/Icons"
import VerifyEmail from "@/components/VerifyEmail"
import Image from "next/image"

interface PageProps {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}


const VerifyEmailPage = ({ searchParams }: PageProps) => {
    const token = searchParams.token
    const toEmail = searchParams.to

    return (
        <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                {token && typeof token === "string" ? (
                    <div className="gird gap-6">
                        <VerifyEmail token={token} />
                    </div>
                ) : (
                    <div className="flex h-full flex-col items-center justify-center space-y-1">
                        <div className="relative w-64 h-64">
                            <Image
                                src="/Mail-sent.png"
                                fill
                                style={{ objectFit: "contain" }}
                                alt="Email Sent to you"
                                quality={80} 
                            />
                        </div>

                        <h3 className="font-semibold text-2xl">Vérifiez vos mails</h3>

                        {toEmail ?
                            (<p className="text-muted-foreground text-center">
                                Un email de vérification a été envoyé à{' '}
                                <span className="font-semibold">{toEmail}</span>.</p>
                            ) : (
                                <p className="text-muted-foreground text-center">
                                    Nous venons de vous envoyé un lien de vérifiaction par Mail.
                                </p>
                            )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default VerifyEmailPage