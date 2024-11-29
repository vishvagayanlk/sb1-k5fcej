import React from 'react';
import { RegexFlag, FLAG_DESCRIPTIONS } from '../types';

interface FlagToggleProps {
  flags: RegexFlag[];
  onChange: (flags: RegexFlag[]) => void;
}

export const FlagToggle: React.FC<FlagToggleProps> = ({ flags, onChange }) => {
  const handleToggle = (flag: RegexFlag) => {
    const newFlags = flags.includes(flag)
      ? flags.filter(f => f !== flag)
      : [...flags, flag];
    onChange(newFlags);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(FLAG_DESCRIPTIONS).map(([flag, description]) => (
        <button
          key={flag}
          onClick={() => handleToggle(flag as RegexFlag)}
          className={`px-2 py-1 text-sm rounded ${
            flags.includes(flag as RegexFlag)
              ? 'bg-primary-100 dark:bg-primary-900 text-primary-900 dark:text-primary-100'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}
          title={description}
        >
          {flag}
        </button>
      ))}
    </div>
  );
};