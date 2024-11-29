import React from 'react';

interface PatternExplanationProps {
  pattern: string;
  components: { name: string; description: string }[];
}

export const PatternExplanation: React.FC<PatternExplanationProps> = ({
  pattern,
  components,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
        Pattern Breakdown
      </h3>
      
      <div className="space-y-4">
        <div className="font-mono text-sm bg-gray-50 dark:bg-gray-900 p-2 rounded">
          {pattern}
        </div>
        
        <div className="space-y-2">
          {components.map((component, index) => (
            <div key={index} className="text-sm">
              <div className="font-medium text-gray-700 dark:text-gray-300">
                {component.name}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {component.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};