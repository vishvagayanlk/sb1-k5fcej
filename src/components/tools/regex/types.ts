export type RegexFlag = 'g' | 'i' | 'm' | 's' | 'u' | 'y';

export const FLAG_DESCRIPTIONS: Record<RegexFlag, string> = {
  g: 'Global search',
  i: 'Case-insensitive search',
  m: 'Multiline search',
  s: 'Allows . to match newlines',
  u: 'Unicode; treat pattern as a sequence of unicode code points',
  y: 'Sticky search',
};

export interface Match {
  value: string;
  index: number;
  groups?: {
    [key: string]: string;
  };
}

export interface Pattern {
  name: string;
  pattern: string;
  description: string;
}

export interface RegexComponent {
  id: string;
  name: string;
  pattern: string;
  description: string;
  configurable?: boolean;
  placeholder?: string;
  value?: string;
}

export type RegexComponentCategory = RegexComponent;