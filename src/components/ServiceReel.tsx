"use client"

import { TQueryValidator } from "@/lib/validators/query-validators";
import { Service } from "@/payload-types";
import { trpc } from "@/trpc/client";
import Link from "next/link";
import ServiceListing from "./ServiceListing";

interface ServiceReelProps {
    title: string
    subtitle?: string
    href?: string
    query: TQueryValidator
}

const FALLBACK_LIMIT = 5;

const ServiceReel = (props: ServiceReelProps) => {
    const { title, subtitle, href, query } = props;

    const { data: queryResults, isLoading } = trpc.getInfiniteServices.useInfiniteQuery({
        limit: query.limit ?? FALLBACK_LIMIT, query
    }, {
        getNextPageParam: (lastPage) => lastPage.nextPage,
    })

    const services = queryResults?.pages.flatMap((page) => page.items)

    let map: (Service | null)[] = []
    if (services && services.length) {
        map = services
    } else if (isLoading) {
        map = new Array<null>(query.limit ?? FALLBACK_LIMIT).fill(null)
    }

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-4 md:flex md:items-center md:justify-between">
                    {title && (
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                            {title}
                        </h1>
                    )}
                    {subtitle && (
                        <p className="mt-2 text-sm text-muted-foreground">
                            {subtitle}
                        </p>
                    )}
                    {href && (
                        <Link href={href} className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-500 md:mt-0">
                            Voir ce que ce freelancer propose d'autre <span aria-hidden="true">&rarr;</span>
                        </Link>
                    )}
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {map.map((service, index) => (
                            <ServiceListing key={service?.id} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ServiceReel;