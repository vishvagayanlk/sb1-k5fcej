import React from 'react';
import { patterns } from '../data/patterns';

interface PatternLibraryProps {
  onSelectPattern: (pattern: string) => void;
}

export const PatternLibrary: React.FC<PatternLibraryProps> = ({ onSelectPattern }) => {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 rounded-lg p-4">
      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
        Pattern Library
      </h3>
      
      <div className="space-y-4">
        {Object.entries(patterns).map(([category, items]) => (
          <div key={category}>
            <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase mb-2">
              {category}
            </h4>
            <div className="space-y-2">
              {items.map((item) => (
                <button
                  key={item.name}
                  onClick={() => onSelectPattern(item.pattern)}
                  className="w-full text-left p-2 text-sm rounded-lg hover:bg-gray-100 
                           dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="font-medium text-gray-900 dark:text-white">
                    {item.name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {item.description}
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};