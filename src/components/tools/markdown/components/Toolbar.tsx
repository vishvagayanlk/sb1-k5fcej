import React from 'react';
import { FiCopy, FiTrash2, FiSave, FiHelpCircle } from 'react-icons/fi';

interface ToolbarProps {
  onClear: () => void;
  onCopy: () => void;
  onSave: () => void;
  onToggleGuide: () => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  onClear,
  onCopy,
  onSave,
  onToggleGuide,
}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <button onClick={onSave} className="btn btn-primary">
        <FiSave className="w-4 h-4 mr-2" />
        Save
      </button>
      <button
        onClick={onCopy}
        className="btn bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white 
                 hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        <FiCopy className="w-4 h-4 mr-2" />
        Copy HTML
      </button>
      <button
        onClick={onClear}
        className="btn bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white 
                 hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        <FiTrash2 className="w-4 h-4 mr-2" />
        Clear
      </button>
      <div className="flex-1" />
      <button
        onClick={onToggleGuide}
        className="btn bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white 
                 hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        <FiHelpCircle className="w-4 h-4 mr-2" />
        Markdown Guide
      </button>
    </div>
  );
};