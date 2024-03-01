import Link from "next/link";
import { NAV_CATEGORIES } from "@/config";
import { Button, buttonVariants } from "./ui/button";

type Category = typeof NAV_CATEGORIES[number];

interface NavItemProps {
    category: Category;
    isActive: boolean;
    onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ category, isActive, onClick }) => {
    return (
        <div className={`flex ${isActive ? "text-blue-500" : "text-gray-700"}`}>
            <div className="relative flex items-center">
                    <Link onClick={onClick} className={buttonVariants({variant: "ghost"})} href={`/${category.href}`}>
                        {category.label}
                    </Link>
            </div>
        </div>
    );
};

export default NavItem;
