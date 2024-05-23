"use client"
import Image from 'next/image';
import { useTheme } from 'next-themes';
import React from 'react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

const Custom404 = () => {
  const { theme } = useTheme();

  const imageUrl = theme === 'dark' ? './404_dark.svg' : './404_light.svg';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center">
        <Image src={imageUrl} alt="Page not found" width={300} height={300} />
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Oops! Page not found</h1>
        <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
          We can't seem to find the page you're looking for.
        </p>
        <Link href="/" className={buttonVariants({ variant: "outline", className: 'gap-1.5' })}>
          Go back &rarr;
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
