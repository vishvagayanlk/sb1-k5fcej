import React, { useMemo } from 'react';
import { Match } from '../types';

interface LivePreviewProps {
  testString: string;
  matches: Match[];
}

export const LivePreview: React.FC<LivePreviewProps> = ({ testString, matches }) => {
  const segments = useMemo(() => {
    if (!matches.length) return [{ text: testString, isMatch: false }];

    const result = [];
    let lastIndex = 0;

    matches.forEach(match => {
      if (match.index > lastIndex) {
        result.push({
          text: testString.slice(lastIndex, match.index),
          isMatch: false,
        });
      }
      result.push({
        text: match.value,
        isMatch: true,
        groups: match.groups,
      });
      lastIndex = match.index + match.value.length;
    });

    if (lastIndex < testString.length) {
      result.push({
        text: testString.slice(lastIndex),
        isMatch: false,
      });
    }

    return result;
  }, [testString, matches]);

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Live Preview
      </h3>
      
      <div className="font-mono text-sm bg-white dark:bg-gray-800 p-4 rounded-lg 
                    border border-gray-200 dark:border-gray-700 whitespace-pre-wrap">
        {segments.map((segment, index) => (
          <span
            key={index}
            className={
              segment.isMatch
                ? 'bg-primary-100 dark:bg-primary-900 text-primary-900 dark:text-primary-100'
                : ''
            }
          >
            {segment.text}
          </span>
        ))}
      </div>
    </div>
  );
};