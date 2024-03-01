'use client'

import { Service } from '@/payload-types';
import { useEffect, useState } from 'react';
import { Skeleton } from './ui/skeleton';
import Link from 'next/link';
import { cn, formatPrice } from '@/lib/utils';
import { clear } from 'console';
import { SERVICES_CATEGORIES } from '@/config';
import { format } from 'path';
import ImageSlider from './ImageSlider';

interface ServiceListingProps {
    service: Service | null
    index: number
}

const ServiceListing = ({ service, index }: ServiceListingProps) => {
    const [isVisible, setIsVisible] = useState<boolean>(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, index * 75)
        return () => clearTimeout(timer)
    }, [index])

    if (!service || !isVisible) return <ServicePlaceHolder />;

    const label = SERVICES_CATEGORIES.find(
        (value) => value.value === service.category
    )?.label;

    const validUrls = service.images
        .map(({ image }) =>
            typeof image === 'string' ? image : image.url
        )
        .filter(Boolean) as string[]

    if (isVisible && service && service.user && typeof service.user === 'object' && service.skills) {
        const skillsBubbles = service.skills.map((skill, index) => (
            <span key={index} className="bg-gray-200 text-gray-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                {skill.skill}
            </span>
        ));

        return (
            <Link href={`/service/${service.id}`} className="block">
                <div className='max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4'>
                    {/* ImageSlider */}
                    <div className='relative w-full'>
                        <ImageSlider urls={validUrls} />
                    </div>

                    {/* Content */}
                    <div className='p-4'>
                        <h3 className='text-lg font-semibold text-gray-900'>
                            {service.user.firstName} {service.user.lastName}
                        </h3>
                        <div className='flex items-center mt-2'>
                            {skillsBubbles}
                        </div>
                        <p className='mt-2 text-gray-600'>{service.description}</p>
                        <p className='mt-2 text-gray-600'>{label}</p>

                        <div className='flex justify-between items-center mt-3'>
                            <span className='text-gray-700 font-bold'>{formatPrice(service.price)}</span>
                            <span className='text-sm text-gray-500'>{service.location}</span>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className='flex justify-between items-center p-4 border-t'>
                        <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center'>
                            <i>{/* Icon here */}</i>
                            <span>Get In Touch</span>
                        </button>
                    </div>
                </div>
            </Link>
        );
    }

}

const ServicePlaceHolder = () => {
    return (
        <div className='bg-white shadow-md rounded-lg overflow-hidden'>
            <Skeleton className='w-full h-56' />
            <div className='p-4'>
                <Skeleton className='w-full h-6 rounded-lg' />
                <Skeleton className='w-2/3 h-6 rounded-lg mt-2' />
                <Skeleton className='w-1/3 h-6 rounded-lg mt-2' />
            </div>
            <div className='flex justify-between items-center p-4 border-t border-gray-200'>
                <Skeleton className='w-1/2 h-8 rounded-lg' />
            </div>
        </div>
    );
};
export default ServiceListing;