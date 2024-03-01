import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ServiceReel from "@/components/ServiceReel";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Vous avez besoin d'aide pour{" "}
          <span className="text-blue-600">design un site web ?</span>
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Connectez-vous instantanément avec des experts pour chaque besoin de
          votre restaurant, de la création de cartes des vins à la gestion de
          votre communauté en ligne.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/categories" className={buttonVariants({variant: "outline"})}>
            Catégories &rarr;
          </Link>
        </div>
        {/* TODO List TOP categories */}

        <ServiceReel query={{ sort: 'asc' }} title="Services populaires" href='/task'/>


      </div>
    </MaxWidthWrapper>
    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:rid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          <h1>Pourquoi nous ?</h1>
        </div>
      </MaxWidthWrapper>
    </section>
    </>
  );
}
