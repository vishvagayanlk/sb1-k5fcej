import React from 'react';
import { Match } from '../types';

interface ResultsPanelProps {
  matches: Match[];
}

export const ResultsPanel: React.FC<ResultsPanelProps> = ({ matches }) => {
  if (matches.length === 0) {
    return (
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center text-gray-500 dark:text-gray-400">
        No matches found
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Matches ({matches.length})
        </h3>
      </div>

      <div className="space-y-2">
        {matches.map((match, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 space-y-2"
          >
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">
                Match {index + 1}
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                Position: {match.index}
              </span>
            </div>
            <div className="font-mono text-sm bg-gray-50 dark:bg-gray-900 p-2 rounded">
              {match.value}
            </div>
            {match.groups && Object.keys(match.groups).length > 0 && (
              <div className="space-y-1">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Groups:
                </div>
                {Object.entries(match.groups).map(([name, value]) => (
                  <div key={name} className="text-sm flex">
                    <span className="text-gray-500 dark:text-gray-400 w-24">
                      {name}:
                    </span>
                    <span className="font-mono">{value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};