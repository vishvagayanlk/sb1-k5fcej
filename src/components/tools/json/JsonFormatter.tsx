import React from 'react';
import { CodeEditor } from './components/Editor';
import { ControlPanel } from './components/ControlPanel';
import { useJsonFormatter } from './hooks/useJsonFormatter';

export const JsonFormatter: React.FC = () => {
  const {
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
  } = useJsonFormatter();

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          JSON Formatter
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Format, validate, and minify your JSON data with ease.
        </p>
      </div>

      <ControlPanel
        onFormat={formatJson}
        onMinify={minifyJson}
        onValidate={validateJson}
        onCopy={copyToClipboard}
        onClear={clearInput}
        isProcessing={isProcessing}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Input JSON</h2>
          <CodeEditor
            value={input}
            onChange={(value) => setInput(value || '')}
            error={error}
          />
        </div>
        <div>
          <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Formatted Output</h2>
          <CodeEditor
            value={formattedOutput}
            onChange={() => {}}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};