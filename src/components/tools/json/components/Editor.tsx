import React from 'react';
import Editor from '@monaco-editor/react';
import { useTheme } from 'next-themes';

interface CodeEditorProps {
  value: string;
  onChange: (value: string | undefined) => void;
  error?: string;
  readOnly?: boolean;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ 
  value, 
  onChange, 
  error,
  readOnly = false
}) => {
  const { theme } = useTheme();
  
  return (
    <div className="relative h-[400px] border rounded-lg overflow-hidden">
      <Editor
        value={value}
        onChange={onChange}
        language="json"
        theme={theme === 'dark' ? 'vs-dark' : 'light'}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          renderLineHighlight: 'all',
          scrollBeyondLastLine: false,
          automaticLayout: true,
          readOnly,
        }}
      />
      {error && (
        <div className="absolute bottom-0 left-0 right-0 bg-red-500/10 text-red-500 p-2 text-sm">
          {error}
        </div>
      )}
    </div>
  );
};