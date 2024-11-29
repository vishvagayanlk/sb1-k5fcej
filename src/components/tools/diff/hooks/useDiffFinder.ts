import { useState, useCallback } from 'react';
import { diffChars } from 'diff';
import { toast } from 'react-hot-toast';

interface DiffPart {
  value: string;
  added?: boolean;
  removed?: boolean;
}

export const useDiffFinder = () => {
  const [originalText, setOriginalText] = useState('');
  const [modifiedText, setModifiedText] = useState('');
  const [diffResult, setDiffResult] = useState<DiffPart[]>();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCompare = useCallback(() => {
    if (!originalText && !modifiedText) {
      toast.error('Please enter text in both fields');
      return;
    }

    setIsProcessing(true);
    try {
      const diff = diffChars(originalText, modifiedText);
      setDiffResult(diff);
    } catch (error) {
      toast.error('Error comparing texts');
    } finally {
      setIsProcessing(false);
    }
  }, [originalText, modifiedText]);

  const handleClear = useCallback(() => {
    setOriginalText('');
    setModifiedText('');
    setDiffResult(undefined);
  }, []);

  const handleCopy = useCallback(async () => {
    if (!diffResult) {
      toast.error('No comparison result to copy');
      return;
    }

    try {
      const text = diffResult.map(part => part.value).join('');
      await navigator.clipboard.writeText(text);
      toast.success('Copied to clipboard!');
    } catch (error) {
      toast.error('Failed to copy to clipboard');
    }
  }, [diffResult]);

  return {
    originalText,
    modifiedText,
    diffResult,
    setOriginalText,
    setModifiedText,
    handleCompare,
    handleClear,
    handleCopy,
    isProcessing,
  };
};