"use client";
import { useMemo, useState } from "react";
import { ChevronDown, LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface ISidebarItem {
  name: string;
  path: string;
  icon: LucideIcon;
  items?: ISubItem[];
}

interface ISubItem {
  name: string;
  path: string;
}

const DashboardItemSidebar = ({ item, isExpanded }: { item: ISidebarItem; isExpanded: boolean }) => {
  const { name, icon: Icon, items, path } = item;
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const onClick = () => {
    if (items && items.length > 0) {
      return setExpanded(!expanded);
    }

    return router.push(path);
  };
  const isActive = useMemo(() => {
    if (items && items.length > 0) {
      if (items.find((item) => item.path === pathname)) {
        setExpanded(true);
        return true;
      }
    }

    return path === pathname;
  }, [items, path, pathname]);

  return (
    <>
      <div className={`flex items-center p-3 rounded-lg hover:bg-sidebar-background cursor-pointer hover:text-sidebar-active justify-between ${isActive && "text-sidebar-active bg-sidebar-background"}`} onClick={onClick}>
        <div className="flex items-center space-x-2">
          <Icon size={20} />
          {isExpanded && <p className="text-sm font-semibold">{name}</p>}
        </div>
        {items && items.length > 0 && isExpanded && <ChevronDown size={18} />}
      </div>
    </>
  );
};

export default DashboardItemSidebar;
