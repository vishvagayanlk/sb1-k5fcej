import { useState, useCallback } from 'react';
import { js as beautify } from 'js-beautify';

export const useJsonFormatter = () => {
  const [input, setInput] = useState('');
  const [formattedOutput, setFormattedOutput] = useState('');
  const [error, setError] = useState<string | undefined>();
  const [isProcessing, setIsProcessing] = useState(false);

  // Validate JSON
  const validateJson = useCallback(() => {
    setError(undefined);
    setIsProcessing(true);

    try {
      JSON.parse(input); // Validate if it's valid JSON
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid JSON');
      return false;
    } finally {
      setIsProcessing(false);
    }
  }, [input]);

  // Pretty-Print JSON
  const formatJson = useCallback(() => {
    if (!validateJson()) return;

    try {
      const formatted = beautify(input, { indent_size: 2 }); // Beautify with 2-space indentation
      setFormattedOutput(formatted);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to format JSON');
    }
  }, [input, validateJson]);

  // Minify JSON
  const minifyJson = useCallback(() => {
    if (!validateJson()) return;

    try {
      const parsed = JSON.parse(input); // Parse and re-stringify to minify
      const minified = JSON.stringify(parsed);
      setFormattedOutput(minified);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to minify JSON');
    }
  }, [input, validateJson]);

  // Copy to Clipboard
  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(formattedOutput || input); // Copy either formatted or raw input
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to copy to clipboard');
    }
  }, [input, formattedOutput]);

  // Clear input and outputs
  const clearInput = useCallback(() => {
    setInput('');
    setFormattedOutput('');
    setError(undefined);
  }, []);

  return {
    input,
    setInput,
    formattedOutput,
    error,
    isProcessing,
    formatJson,
    minifyJson,
    validateJson,
    copyToClipboard,
    clearInput,
  };
};
