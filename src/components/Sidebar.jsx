import React from 'react';
import { House, BriefcaseBusiness , ChartLine, ChartPie, Inbox } from 'lucide-react';

export const Sidebar = () => {
  const menuItems = [
    { icon: House, active: true },
    { icon: BriefcaseBusiness, active: false },
    { icon: ChartLine, active: false },
    { icon: ChartPie, active: false },
    { icon: Inbox, active: false }
  ];

  return (
    <div className="fixed left-8 top-32 z-3 bg-blue-600 rounded-full shadow-lg p-3 flex flex-col gap-4">
      {menuItems.map((item, index) => (
        <button
          key={index}
          className={`p-3 rounded-full transition-colors ${
            item.active ? 'bg-blue-700' : 'hover:bg-blue-700'
          }`}
        >
          <item.icon className="w-6 h-6 text-white" />
        </button>
      ))}
    </div>
  );
};