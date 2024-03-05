"use client"
import React from 'react';
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from './ui/button';

interface ISettingsTabItem {
    name: string;
    path: string;
}

const SettingsTabItem: React.FC<ISettingsTabItem> = ({ name, path }) => {
    const router = useRouter();
    const pathname = usePathname();

    const onClick = () => {
        return router.push(path);
    };
    const isActive = path === pathname;
    return (
        <div onClick={onClick}>
            <Link href={path} className={`px-6 py-3 block whitespace-nowrap ${isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-zinc-500 border-b border-gray-200'}`}>
                {name}
            </Link>
        </div>
    );
};

export default SettingsTabItem;
