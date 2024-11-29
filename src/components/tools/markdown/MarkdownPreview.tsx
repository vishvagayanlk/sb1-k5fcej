import React, { useState, useEffect } from 'react';
import { Editor } from './components/Editor';
import { Preview } from './components/Preview';
import { Toolbar } from './components/Toolbar';
import { MarkdownGuide } from './components/MarkdownGuide';
import { useMarkdownEditor } from './hooks/useMarkdownEditor';
import { FiMaximize2, FiMinimize2 } from 'react-icons/fi';

export const MarkdownPreview: React.FC = () => {
  const {
    content,
    setContent,
    previewHtml,
    handleClear,
    handleCopy,
    handleSave,
    error,
  } = useMarkdownEditor();

  const [isPreviewFullscreen, setIsPreviewFullscreen] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  return (
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Markdown Editor
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Write and preview Markdown with real-time rendering.
        </p>
      </div>

      <Toolbar
        onClear={handleClear}
        onCopy={handleCopy}
        onSave={handleSave}
        onToggleGuide={() => setShowGuide(!showGuide)}
      />

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-0">
        <div className={`flex flex-col ${isPreviewFullscreen ? 'hidden lg:flex' : 'flex'}`}>
          <div className="flex-1 min-h-0">
            <Editor
              value={content}
              onChange={setContent}
              error={error}
            />
          </div>
        </div>

        <div className={`flex flex-col ${isPreviewFullscreen ? 'col-span-2' : ''}`}>
          <div className="flex justify-end mb-2">
            <button
              onClick={() => setIsPreviewFullscreen(!isPreviewFullscreen)}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 
                       dark:hover:text-gray-200"
              aria-label={isPreviewFullscreen ? 'Minimize preview' : 'Maximize preview'}
            >
              {isPreviewFullscreen ? <FiMinimize2 /> : <FiMaximize2 />}
            </button>
          </div>
          <div className="flex-1 min-h-0">
            <Preview content={previewHtml} />
          </div>
        </div>
      </div>

      <MarkdownGuide isOpen={showGuide} onClose={() => setShowGuide(false)} />
    </div>
  );
};