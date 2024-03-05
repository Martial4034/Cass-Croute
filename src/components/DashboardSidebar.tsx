"use client";
import { LucideIcon, Home, MessageSquare, Book, Heart, Settings, Star, Menu, X } from 'lucide-react';
import DashboardItemSidebar from "./DashboardItemSidebar";
import MaxWidthWrapper from "./MaxWidthWrapper";

import React, { useState, useEffect } from 'react';

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

const items: ISidebarItem[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: Home,
  },
  {
    name: "Messages",
    path: "/dashboard/messages",
    icon: MessageSquare,
  },
  {
    name: "Reservations",
    path: "/dashboard/bookings",
    icon: Book,
  },
  {
    name: "Aimées",
    path: "/dashboard/liked-services",
    icon: Heart,
  },
  {
    name: "Mes avis",
    path: "/dashboard/my-reviews",
    icon: Star,
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    icon: Settings,
  },
];

const DashboardSidebar = () => {

  // Dans DashboardSidebar.tsx ou un contexte parent, initialisez isExpanded à false par défaut.
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Fonction pour déterminer si la sidebar doit être expandée basée sur la largeur de la fenêtre.
    const checkIfShouldExpand = () => window.innerWidth > 768;

    // Mettez à jour isExpanded basé sur la largeur de la fenêtre après le montage.
    setIsExpanded(checkIfShouldExpand());

    // Optionnel: Ajoutez un gestionnaire pour mettre à jour isExpanded quand la fenêtre est redimensionnée.
    const handleResize = () => {
      setIsExpanded(checkIfShouldExpand());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <MaxWidthWrapper>
      <div className={`fixed top-15 left-0 h-screen ${isExpanded ? 'w-64' : 'w-20'} bg-white shadow-lg z-10 p-4 transition-width duration-300`}>


        <div className="flex flex-col space-y-10 w-full">
          <div className="absolute top-3 right-6" onClick={toggleSidebar}>
            {isExpanded ? (
              <X className="mb-4 w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 transition-transform duration-200" />
            ) : (
              <Menu className="mb-4 w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 transition-transform duration-200" />
            )}
          </div>
          <div className="flex flex-col space-y-2">
            {items.map((item, index) => (
              <DashboardItemSidebar key={index} item={item} isExpanded={isExpanded} />
            ))}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default DashboardSidebar;
