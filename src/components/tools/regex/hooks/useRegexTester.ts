import { useState, useCallback, useEffect } from 'react';
import { RegexFlag, Match, RegexComponent } from '../types';
import { toast } from 'react-hot-toast';

export const useRegexTester = () => {
  const [pattern, setPattern] = useState('');
  const [flags, setFlags] = useState<RegexFlag[]>(['g']);
  const [testString, setTestString] = useState('');
  const [matches, setMatches] = useState<Match[]>([]);
  const [error, setError] = useState<string>();
  const [components, setComponents] = useState<RegexComponent[]>([]);

  const handleAddComponent = useCallback((component: RegexComponent) => {
    setComponents(prev => [...prev, component]);
  }, []);

  const handleRemoveComponent = useCallback((index: number) => {
    setComponents(prev => prev.filter((_, i) => i !== index));
  }, []);

  const handleUpdateComponent = useCallback((index: number, updates: Partial<RegexComponent>) => {
    setComponents(prev => prev.map((comp, i) => 
      i === index ? { ...comp, ...updates } : comp
    ));
  }, []);

  useEffect(() => {
    // Build pattern from components
    const newPattern = components
      .map(comp => {
        if (comp.configurable && comp.value) {
          return comp.pattern.replace('()', `(${comp.value})`);
        }
        return comp.pattern;
      })
      .join('');
    
    setPattern(newPattern);
  }, [components]);

  const handleTest = useCallback(() => {
    setError(undefined);
    setMatches([]);

    if (!pattern) {
      setError('Please enter a regex pattern');
      return;
    }

    try {
      const regex = new RegExp(pattern, flags.join(''));
      const results: Match[] = [];
      let match;

      if (flags.includes('g')) {
        while ((match = regex.exec(testString)) !== null) {
          results.push({
            value: match[0],
            index: match.index,
            groups: match.groups,
          });
        }
      } else if ((match = regex.exec(testString)) !== null) {
        results.push({
          value: match[0],
          index: match.index,
          groups: match.groups,
        });
      }

      setMatches(results);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid regular expression');
    }
  }, [pattern, flags, testString]);

  const handleClear = useCallback(() => {
    setPattern('');
    setTestString('');
    setMatches([]);
    setError(undefined);
    setComponents([]);
  }, []);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(
        matches.map(m => m.value).join('\n')
      );
      toast.success('Matches copied to clipboard');
    } catch {
      toast.error('Failed to copy to clipboard');
    }
  }, [matches]);

  return {
    pattern,
    setPattern,
    flags,
    setFlags,
    testString,
    setTestString,
    matches,
    error,
    components,
    handleAddComponent,
    handleRemoveComponent,
    handleUpdateComponent,
    handleTest,
    handleClear,
    handleCopy,
  };
};