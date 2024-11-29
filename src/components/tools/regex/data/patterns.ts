import { Pattern } from '../types';

interface PatternCategory {
  [key: string]: Pattern[];
}

export const patterns: PatternCategory = {
  'Common Patterns': [
    {
      name: 'Email',
      pattern: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
      description: 'Match email addresses',
    },
    {
      name: 'URL',
      pattern: 'https?:\\/\\/[\\w\\-\\.]+\\.[a-zA-Z]{2,}(\\/\\S*)?',
      description: 'Match URLs',
    },
    {
      name: 'Phone Number',
      pattern: '^\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}$',
      description: 'Match phone numbers in various formats',
    },
  ],
  'Text Patterns': [
    {
      name: 'Words',
      pattern: '\\b\\w+\\b',
      description: 'Match whole words',
    },
    {
      name: 'Numbers',
      pattern: '-?\\d*\\.?\\d+',
      description: 'Match integers and decimal numbers',
    },
    {
      name: 'Date',
      pattern: '\\d{4}-\\d{2}-\\d{2}',
      description: 'Match dates in YYYY-MM-DD format',
    },
  ],
  'Code Patterns': [
    {
      name: 'Variable Names',
      pattern: '[a-zA-Z_$][a-zA-Z0-9_$]*',
      description: 'Match valid JavaScript variable names',
    },
    {
      name: 'HTML Tags',
      pattern: '<[^>]+>',
      description: 'Match HTML tags',
    },
    {
      name: 'CSS Colors',
      pattern: '#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})',
      description: 'Match hexadecimal color codes',
    },
  ],
};