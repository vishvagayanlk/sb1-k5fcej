import React from 'react';
import { Dialog } from '@headlessui/react';
import { markdownGuide } from '../data/markdownGuide';

interface MarkdownGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MarkdownGuide: React.FC<MarkdownGuideProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-2xl w-full bg-white dark:bg-gray-800 rounded-xl 
                               shadow-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <Dialog.Title className="text-lg font-medium text-gray-900 dark:text-white">
              Markdown Guide
            </Dialog.Title>
          </div>

          <div className="px-6 py-4 max-h-[calc(100vh-200px)] overflow-y-auto">
            <div className="space-y-6">
              {Object.entries(markdownGuide).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                    {category}
                  </h3>
                  <div className="space-y-3">
                    {items.map((item, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 dark:bg-gray-900 rounded-lg p-3"
                      >
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {item.title}
                        </div>
                        <pre className="text-sm font-mono bg-white dark:bg-gray-800 p-2 rounded">
                          {item.example}
                        </pre>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={onClose}
              className="btn btn-primary w-full"
            >
              Close Guide
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};