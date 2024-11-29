import { useState, useCallback, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDebounce } from './useDebounce';

const STORAGE_KEY = 'markdown-content';
const AUTOSAVE_DELAY = 5000;

export const useMarkdownEditor = () => {
  const [content, setContent] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) || '';
  });
  
  const [previewHtml, setPreviewHtml] = useState('');
  const [error, setError] = useState<string>();
  
  const debouncedContent = useDebounce(content, 300);

  // Auto-save content
  useEffect(() => {
    const timer = setInterval(() => {
      localStorage.setItem(STORAGE_KEY, content);
    }, AUTOSAVE_DELAY);

    return () => clearInterval(timer);
  }, [content]);

  // Update preview when content changes
  useEffect(() => {
    try {
      setPreviewHtml(debouncedContent);
      setError(undefined);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error processing markdown');
    }
  }, [debouncedContent]);

  const handleClear = useCallback(() => {
    if (window.confirm('Are you sure you want to clear the editor?')) {
      setContent('');
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(previewHtml);
      toast.success('HTML copied to clipboard');
    } catch {
      toast.error('Failed to copy to clipboard');
    }
  }, [previewHtml]);

  const handleSave = useCallback(() => {
    try {
      const blob = new Blob([content], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'document.md';
      a.click();
      URL.revokeObjectURL(url);
      toast.success('Document saved');
    } catch {
      toast.error('Failed to save document');
    }
  }, [content]);

  return {
    content,
    setContent,
    previewHtml,
    error,
    handleClear,
    handleCopy,
    handleSave,
  };
};