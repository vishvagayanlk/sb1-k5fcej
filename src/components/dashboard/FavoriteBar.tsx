import React from 'react';
import { tools } from './tools';
import Link from 'next/link';

export const FavoriteBar: React.FC = () => {
  // In a real app, this would come from user preferences
  const favorites = tools.slice(0, 5);

  return (
    <div className="flex space-x-2 overflow-x-auto pb-2">
      {favorites.map(tool => (
        <Link
          key={tool.id}
          href={`/tools/${tool.id}`}
          className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-lg 
                   hover:shadow-md transition-shadow duration-200 whitespace-nowrap"
        >
          <tool.icon className="w-4 h-4 text-primary-600 dark:text-primary-400 mr-2" />
          <span className="text-sm text-gray-900 dark:text-white">{tool.name}</span>
        </Link>
      ))}
    </div>
  );
};