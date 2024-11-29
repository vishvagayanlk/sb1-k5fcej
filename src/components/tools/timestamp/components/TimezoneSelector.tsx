import React from 'react';
import { FiGlobe } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { timezones } from '../data/timezones';

interface TimezoneSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const TimezoneSelector: React.FC<TimezoneSelectorProps> = ({ value, onChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="glass p-6 space-y-4"
    >
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-300">
          Timezone
        </label>
        <div className="text-cyan-400">
          <FiGlobe className="w-4 h-4" />
        </div>
      </div>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input"
      >
        {timezones.map((tz) => (
          <option key={tz.value} value={tz.value}>
            {tz.label}
          </option>
        ))}
      </select>

      <div className="text-xs text-gray-500">
        All conversions will use this timezone
      </div>
    </motion.div>
  );
};