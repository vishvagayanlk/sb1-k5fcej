import React from 'react';
import { FiCopy, FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface UnixInputProps {
  value: string;
  onChange: (value: string) => void;
  onCopy: (value: string) => void;
}

export const UnixInput: React.FC<UnixInputProps> = ({ value, onChange, onCopy }) => {
  const handleNow = () => {
    onChange(Math.floor(Date.now() / 1000).toString());
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass p-6 space-y-4"
    >
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-300">
          Unix Timestamp
        </label>
        <button
          onClick={handleNow}
          className="flex items-center text-sm text-cyan-400 hover:text-cyan-300"
        >
          <FiClock className="w-4 h-4 mr-1" />
          Now
        </button>
      </div>

      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="input pr-10"
          placeholder="Enter Unix timestamp..."
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
        Seconds since January 1, 1970 00:00:00 UTC
      </div>
    </motion.div>
  );
};