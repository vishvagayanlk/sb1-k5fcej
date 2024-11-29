import React from 'react';
import { RegexInput } from './components/RegexInput';
import { TestInput } from './components/TestInput';
import { ResultsPanel } from './components/ResultsPanel';
import { PatternLibrary } from './components/PatternLibrary';
import { VisualBuilder } from './components/VisualBuilder';
import { LivePreview } from './components/LivePreview';
import { PatternExplanation } from './components/PatternExplanation';
import { useRegexTester } from './hooks/useRegexTester';

export const RegexTester: React.FC = () => {
  const {
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
  } = useRegexTester();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Regex Tester
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Test and debug regular expressions with real-time matching.
          </p>
        </div>

        <VisualBuilder
          components={components}
          onAddComponent={handleAddComponent}
          onRemoveComponent={handleRemoveComponent}
          onUpdateComponent={handleUpdateComponent}
        />

        <RegexInput
          pattern={pattern}
          flags={flags}
          onPatternChange={setPattern}
          onFlagsChange={setFlags}
          error={error}
        />

        <TestInput
          value={testString}
          onChange={setTestString}
          onTest={handleTest}
          onClear={handleClear}
          onCopy={handleCopy}
        />

        <LivePreview
          testString={testString}
          matches={matches}
        />

        <ResultsPanel matches={matches} />
      </div>

      <div className="space-y-6">
        <PatternLibrary onSelectPattern={setPattern} />
        <PatternExplanation
          pattern={pattern}
          components={components}
        />
      </div>
    </div>
  );
};