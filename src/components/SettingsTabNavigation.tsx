"use client";
import React from 'react';
import SettingsTabItem from './SettingsTabItem';

const tabs = [
  { name: 'Personal Information', path: '/dashboard/settings' },
  { name: 'Change Password', path: '/dashboard/settings/reset-password' },
  { name: 'Notifications', path: '/dashboard/settings/notifications' },
  { name: 'Integrations', path: '/dashboard/settings/integrations' },
  { name: 'My Data', path: '/dashboard/settings/my-data' }
];

const SettingsTabNavigation: React.FC = () => {
  return (
    <div className="flex overflow-x-auto overflow-y-hidden border-b border-gray-200 mt-4">
      {tabs.map((tab) => (
        <SettingsTabItem key={tab.path} name={tab.name} path={tab.path} />
      ))}
    </div>
  );
};

export default SettingsTabNavigation;
