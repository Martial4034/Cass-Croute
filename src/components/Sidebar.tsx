// src/components/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, MessageSquare, Book, Heart, Settings, FilePlus } from 'lucide-react';
import { User } from '@/payload-types';

interface SidebarProps {
  user: User;
}

const Sidebar: React.FC<SidebarProps> = ({ user }) => {
  const pathname = usePathname();

  // Définir la navigation de base
  const baseNavigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Messages', href: '/messages', icon: MessageSquare },
    { name: 'Reservations', href: '/bookings', icon: Book },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  // Ajouter la navigation conditionnelle
  const conditionalNavigation = user.job === 'hiring'
    ? { name: 'Aimées', href: '/liked', icon: Heart }
    : { name: 'Crée un service', href: '/CreateService', icon: FilePlus };

  // Combiner la navigation de base avec la navigation conditionnelle
  const navigation = [...baseNavigation, conditionalNavigation];

  return (
    <aside className="w-64" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>
                
                  <item.icon className="w-5 h-5" aria-hidden="true" />
                  <span className="ml-3">{item.name}</span>

              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
