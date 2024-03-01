"use client"

import { NAV_CATEGORIES } from "@/config";
import { useState } from "react";
import NavItem from "./NavItem";

const NavItems = () => {
    const [activeIndex, setActiveIndex] = useState<null | number>(null);

    const handleItemClick = (index: number) => {
        setActiveIndex(index); // Met à jour l'indice actif
    };

    return (
        <div className="flex gap-4 h-full">
            {NAV_CATEGORIES.map((category, i) => (
                <NavItem
                    key={i}
                    category={category}
                    isActive={i === activeIndex}
                    onClick={() => handleItemClick(i)}
                />
            ))}
        </div>
    );
};

export default NavItems;
