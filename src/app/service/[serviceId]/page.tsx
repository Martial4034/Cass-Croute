import ImageSlider from "@/components/ImageSlider"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import ServiceReel from "@/components/ServiceReel"
import { SERVICES_CATEGORIES } from "@/config"
import { getPayloadClient } from "@/get-payload"
import { formatPrice } from "@/lib/utils"
import { Check, Clock, XCircle } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

interface PageProps {
    params: {
        serviceId: string,
    }
}

const Page = async ({ params }: PageProps) => {
    const { serviceId } = params

    const payload = await getPayloadClient()

    const { docs: services } = await payload.find({
        collection: "services",
        limit: 1,
        where: {
            id: {
                equals: serviceId
            },
            approvedForPublic: {
                equals: "approved"
            }
        },
    })
    const [service] = services

    if (!service) return notFound()


    const label = SERVICES_CATEGORIES.find(
        (value) => value.value === service.category
    )?.label;

    const BREADCRUMBS = [
        {
            id: 1,
            name: "Home",
            href: "/"
        },
        {
            id: 2,
            name: "Services",
            href: "/services"
        },
        {
            id: 3,
            name: label,
            href: "/service"

        }
    ]
    const validUrls = service.images
        .map(({ image }) =>
            typeof image === 'string' ? image : image.url
        )
        .filter(Boolean) as string[]

    return (
        <MaxWidthWrapper className="bg-white">
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    { /* Service Details */}
                    <div className="lg:max-w-lg lg:self-end">
                        <ol className='flex items-center space-x-2'>
                            {BREADCRUMBS.map((breadcrumb, i) => (
                                <li key={breadcrumb.href}>
                                    <div className='flex items-center text-sm'>
                                        <Link
                                            href={breadcrumb.href}
                                            className='font-medium text-sm text-muted-foreground hover:text-gray-900'>
                                            {breadcrumb.name}
                                        </Link>
                                        {i !== BREADCRUMBS.length - 1 ? (
                                            <svg
                                                viewBox='0 0 20 20'
                                                fill='currentColor'
                                                aria-hidden='true'
                                                className='ml-2 h-5 w-5 flex-shrink-0 text-gray-300'>
                                                <path d='M5.555 17.776l8-16 .894.448-8 16-.894-.448z' />
                                            </svg>
                                        ) : null}
                                    </div>
                                </li>
                            ))}
                        </ol>

                        <div className="mt-4">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-950">
                                {service.title}
                            </h1>
                        </div>

                        <section className="mt-4">
                            <div className="flex items-center">
                                <p className="font-medium text-gray-900">
                                    {formatPrice(service.price)}
                                </p>

                                <div className="ml-4 border-l text-muted-foreground border-gray-300 pl-4">
                                    {label}
                                </div>
                            </div>

                            <div className="mt-4 space-y-6">
                                <p className="text-base text-muted-foreground">
                                    {service.description}
                                </p>
                            </div>

                            {/* Service Status */}
                            <div className="mt-6 flex items-center">
                                {service.serviceStatus === 'available' && (
                                    <span className="flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                                        <Check aria-hidden="true" className="h-5 w-5 flex-shrink-0 mr-1" />
                                        Available
                                    </span>
                                )}
                                {service.serviceStatus === 'booked' && (
                                    <span className="flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800">
                                        <Clock aria-hidden="true" className="h-5 w-5 flex-shrink-0 mr-1" />
                                        Booked
                                    </span>
                                )}
                                {service.serviceStatus === 'unavailable' && (
                                    <span className="flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-800">
                                        <XCircle aria-hidden="true" className="h-5 w-5 flex-shrink-0 mr-1" />
                                        Unavailable
                                    </span>
                                )}
                            </div>

                            {/* Service Images */}
                            <div className='mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center'>
                                <div className='aspect-square rounded-lg'>
                                    <ImageSlider urls={validUrls} />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <ServiceReel
                href="/services"
                query={{ category: service.category || undefined, limit: 5 }}
                title={`More ${label} services`}
                subtitle="Discover more services in this category"
            />
        </MaxWidthWrapper>
    )
}

export default Page