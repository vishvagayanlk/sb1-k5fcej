import React from 'react';
import { FiCopy, FiCalendar } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface DateTimeInputProps {
  value: string;
  onChange: (value: string) => void;
  onCopy: (value: string) => void;
}

export const DateTimeInput: React.FC<DateTimeInputProps> = ({ value, onChange, onCopy }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass p-6 space-y-4"
    >
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-300">
          Date & Time
        </label>
        <div className="text-cyan-400">
          <FiCalendar className="w-4 h-4" />
        </div>
      </div>

      <div className="relative">
        <input
          type="datetime-local"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="input pr-10"
        />
        <button
          onClick={() => onCopy(value)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 
                   hover:text-white transition-colors"
        >
          <FiCopy className="w-4 h-4" />
        </button>
      </div>

      <div className="text-xs text-gray-500">
        Local date and time
      </div>
    </motion.div>
  );
};