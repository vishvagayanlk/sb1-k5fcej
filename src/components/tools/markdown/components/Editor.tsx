import React from 'react';
import { Editor as Editorx } from '@monaco-editor/react';
import { useTheme } from 'next-themes';

interface EditorProps {
  value: string;
  onChange: (value: string | undefined) => void;
  error?: string;
}

export const Editor: React.FC<EditorProps> = ({ 
  value, 
  onChange,
  error 
}) => {
  const { theme } = useTheme();

  return (
    <div className="relative h-full border rounded-lg overflow-hidden">
      <Editorx
        value={value}
        onChange={onChange}
        language="markdown"
        theme={theme === 'dark' ? 'vs-dark' : 'light'}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          renderLineHighlight: 'all',
          scrollBeyondLastLine: false,
          wordWrap: 'on',
          automaticLayout: true,
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