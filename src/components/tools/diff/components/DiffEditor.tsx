import React from 'react';
import { motion } from 'framer-motion';

interface DiffEditorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const DiffEditor: React.FC<DiffEditorProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass p-6 space-y-4"
    >
      <label className="block text-sm font-medium text-gray-300">
        {label}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={10}
        className="input font-mono text-sm"
      />
    </motion.div>
  );
};