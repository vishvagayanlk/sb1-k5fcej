import React from 'react';
import { FiPlay, FiCopy, FiTrash2 } from 'react-icons/fi';

interface TestInputProps {
  value: string;
  onChange: (value: string) => void;
  onTest: () => void;
  onClear: () => void;
  onCopy: () => void;
}

export const TestInput: React.FC<TestInputProps> = ({
  value,
  onChange,
  onTest,
  onClear,
  onCopy,
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Test String
      </label>
      
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter text to test against..."
        rows={5}
        className="input font-mono"
      />

      <div className="flex gap-2">
        <button onClick={onTest} className="btn btn-primary">
          <FiPlay className="w-4 h-4 mr-2" />
          Test
        </button>
        <button
          onClick={onCopy}
          className="btn bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white 
                   hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          <FiCopy className="w-4 h-4 mr-2" />
          Copy
        </button>
        <button
          onClick={onClear}
          className="btn bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white 
                   hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          <FiTrash2 className="w-4 h-4 mr-2" />
          Clear
        </button>
      </div>
    </div>
  );
};