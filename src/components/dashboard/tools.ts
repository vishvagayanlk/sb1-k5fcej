import { 
  FiCode, 
  FiHash, 
  FiFileText, 
  FiClock,
  FiSliders,
  FiMinimize2,
  FiDatabase,
  FiDroplet,
  FiLink2
} from 'react-icons/fi';

export const tools = [
  {
    id: 'json',
    name: 'JSON Formatter',
    description: 'Format, validate and beautify JSON data',
    icon: FiCode,
    usageCount: 1234,
    category: 'formatters'
  },
  {
    id: 'regex',
    name: 'Regex Tester',
    description: 'Test and debug regular expressions',
    icon: FiHash,
    usageCount: 892,
    category: 'utilities'
  },
  {
    id: 'markdown',
    name: 'Markdown Editor',
    description: 'Write and preview Markdown with real-time rendering',
    icon: FiFileText,
    usageCount: 756,
    category: 'editors'
  },
  {
    id: 'timestamp',
    name: 'Timestamp Converter',
    description: 'Convert between Unix timestamps and dates',
    icon: FiClock,
    usageCount: 645,
    category: 'converters'
  },
  {
    id: 'units',
    name: 'Unit Converter',
    description: 'Convert between different units of measurement',
    icon: FiSliders,
    usageCount: 534,
    category: 'converters'
  },
  {
    id: 'minifier',
    name: 'Code Minifier',
    description: 'Minify JavaScript, CSS, and HTML code',
    icon: FiMinimize2,
    usageCount: 423,
    category: 'formatters'
  },
  {
    id: 'data',
    name: 'Data Generator',
    description: 'Generate sample data for testing',
    icon: FiDatabase,
    usageCount: 312,
    category: 'generators'
  },
  {
    id: 'color',
    name: 'Color Tools',
    description: 'Convert and manipulate colors',
    icon: FiDroplet,
    usageCount: 245,
    category: 'utilities'
  },
  {
    id: 'slug',
    name: 'URL Slug Generator',
    description: 'Generate clean URLs from text',
    icon: FiLink2,
    usageCount: 189,
    category: 'generators'
  }
] as const;