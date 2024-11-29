import React from 'react';
import { tools } from '../../dashboard/tools';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  return (
    <aside className="w-64 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Tools
        </h2>
      </div>
      <nav className="mt-2 px-2">
        {tools.map(({ id, icon: Icon, name }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`
              w-full flex items-center px-4 py-2 mt-2 text-sm rounded-lg
              ${activeTab === id
                ? 'bg-primary-100 dark:bg-primary-900 text-primary-900 dark:text-primary-100'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }
            `}
          >
            <Icon className="w-5 h-5 mr-3" />
            {name}
          </button>
        ))}
      </nav>
    </aside>
  );
};