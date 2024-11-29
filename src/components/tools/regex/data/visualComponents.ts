import { RegexComponentCategory } from '../types';

export const visualComponents: Record<string, RegexComponentCategory[]> = {
  'Basic': [
    {
      id: 'literal',
      name: 'Literal Text',
      pattern: '',
      description: 'Match exact text',
      configurable: true,
      placeholder: 'Enter text to match',
      value: '',
    },
    {
      id: 'digit',
      name: 'Digit',
      pattern: '\\d',
      description: 'Match any digit (0-9)',
      configurable: false,
    },
    {
      id: 'word',
      name: 'Word Character',
      pattern: '\\w',
      description: 'Match any word character (a-z, A-Z, 0-9, _)',
      configurable: false,
    },
  ],
  'Quantifiers': [
    {
      id: 'oneOrMore',
      name: 'One or More',
      pattern: '+',
      description: 'Match one or more occurrences',
      configurable: false,
    },
    {
      id: 'zeroOrMore',
      name: 'Zero or More',
      pattern: '*',
      description: 'Match zero or more occurrences',
      configurable: false,
    },
    {
      id: 'optional',
      name: 'Optional',
      pattern: '?',
      description: 'Match zero or one occurrence',
      configurable: false,
    },
  ],
  'Groups': [
    {
      id: 'group',
      name: 'Capturing Group',
      pattern: '()',
      description: 'Create a capturing group',
      configurable: true,
      placeholder: 'Group pattern',
      value: '',
    },
    {
      id: 'nonCapturing',
      name: 'Non-capturing Group',
      pattern: '(?:)',
      description: 'Create a non-capturing group',
      configurable: true,
      placeholder: 'Group pattern',
      value: '',
    },
  ],
};