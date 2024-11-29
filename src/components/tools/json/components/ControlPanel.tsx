import React from 'react';
import { FiCheck, FiCopy, FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-hot-toast';

interface ControlPanelProps {
  onFormat: () => void;
  onMinify: () => void;
  onValidate: () => void;
  onClear: () => void;
  onCopy: () => void;
  isProcessing: boolean;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
  onFormat,
  onMinify,
  onValidate,
  onClear,
  onCopy,
  isProcessing,
}) => {
  const handleCopy = async () => {
    try {
      await onCopy();
      toast.success('Copied to clipboard!');
    } catch (error) {
      toast.error('Failed to copy to clipboard');
    }
  };

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <button
        onClick={onFormat}
        disabled={isProcessing}
        className="btn btn-primary"
      >
        Format JSON
      </button>
      <button
        onClick={onMinify}
        disabled={isProcessing}
        className="btn bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white 
                 hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        Minify
      </button>
      <button
        onClick={onValidate}
        disabled={isProcessing}
        className="btn bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white 
                 hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        Validate
      </button>
      <div className="flex-1" />
      <button
        onClick={handleCopy}
        disabled={isProcessing}
        className="btn bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white 
                 hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        <FiCopy className="w-4 h-4 mr-2" />
        Copy
      </button>
      <button
        onClick={onClear}
        disabled={isProcessing}
        className="btn bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white 
                 hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        <FiTrash2 className="w-4 h-4 mr-2" />
        Clear
      </button>
    </div>
  );
};