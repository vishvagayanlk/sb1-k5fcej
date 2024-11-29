import React from 'react';
import { FiGitMerge, FiCopy, FiTrash2 } from 'react-icons/fi';

interface ControlPanelProps {
  onCompare: () => void;
  onClear: () => void;
  onCopy: () => void;
  isProcessing: boolean;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
  onCompare,
  onClear,
  onCopy,
  isProcessing,
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={onCompare}
        disabled={isProcessing}
        className="btn btn-primary"
      >
        <FiGitMerge className="w-4 h-4 mr-2" />
        Compare
      </button>
      <button
        onClick={onCopy}
        disabled={isProcessing}
        className="btn bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white 
                 hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        <FiCopy className="w-4 h-4 mr-2" />
        Copy Result
      </button>
      <button
        onClick={onClear}
        disabled={isProcessing}
        className="btn bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white 
                 hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        <FiTrash2 className="w-4 h-4 mr-2" />
        Clear All
      </button>
    </div>
  );
};