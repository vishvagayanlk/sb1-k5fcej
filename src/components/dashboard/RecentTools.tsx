import Link from 'next/link';
import React from 'react';
import { tools } from './tools';

export const RecentTools: React.FC = () => {
  // In a real app, this would come from a store or API
  const recentTools = tools.slice(0, 4);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Recently Used
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {recentTools.map(tool => (
          <Link
            key={tool.id}
            href={`/tools/${tool.id}`}
            className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg 
                     hover:shadow-md transition-shadow duration-200"
          >
            <tool.icon className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3" />
            <span className="text-gray-900 dark:text-white">{tool.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};