import React from 'react';
import { Sidebar } from './Sidebar';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

export const ToolLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="relative z-10 min-h-screen">
        <div className="flex">
          <Sidebar />
          <motion.main 
            className="flex-1 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-panel p-6">
              {children}
            </div>
          </motion.main>
        </div>
      </div>
    </div>
  );
};