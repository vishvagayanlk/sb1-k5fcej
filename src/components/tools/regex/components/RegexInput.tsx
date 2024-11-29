import React from 'react';
import { FlagToggle } from './FlagToggle';
import { RegexFlag } from '../types';

interface RegexInputProps {
  pattern: string;
  flags: RegexFlag[];
  onPatternChange: (pattern: string) => void;
  onFlagsChange: (flags: RegexFlag[]) => void;
  error?: string;
}

export const RegexInput: React.FC<RegexInputProps> = ({
  pattern,
  flags,
  onPatternChange,
  onFlagsChange,
  error,
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Regular Expression
      </label>
      
      <div className="relative">
        <input
          type="text"
          value={pattern}
          onChange={(e) => onPatternChange(e.target.value)}
          placeholder="Enter regex pattern..."
          className="input pr-16"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-400">
          /{pattern}/{flags.join('')}
        </div>
      </div>

      <FlagToggle flags={flags} onChange={onFlagsChange} />

      {error && (
        <div className="text-sm text-red-500">
          {error}
        </div>
      )}
    </div>
  );
};