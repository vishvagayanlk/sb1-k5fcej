import React from 'react';
import { motion } from 'framer-motion';
import { tools } from './tools';
import Link from 'next/link';

export const ToolGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {tools.map((tool, index) => (
        <motion.div
          key={tool.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link href={`/tools/${tool.id}`} passHref>
            <div className="block bg-white dark:bg-gray-800 rounded-lg shadow-sm 
                          hover:shadow-md transition-shadow duration-200 overflow-hidden 
                          cursor-pointer">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <tool.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {tool.usageCount} uses
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {tool.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {tool.description}
                </p>
                <button className="btn btn-primary w-full">
                  Quick Launch
                </button>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};