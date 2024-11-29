import React from 'react';
import { JsonFormatter } from '../../tools/json/JsonFormatter';
import { RegexTester } from '../../tools/regex/RegexTester';
import { MarkdownPreview } from '../../tools/markdown/MarkdownPreview';
import { TimestampConverter } from '../../tools/timestamp/TimestampConverter';
import { UnitConverter } from '../../tools/unit/UnitConverter';
import { CodeMinifier } from '../../tools/minifier/CodeMinifier';
import { DataGenerator } from '../../tools/data/DataGenerator';
import { ColorConverter } from '../../tools/color/ColorConverter';
import { SlugGenerator } from '../../tools/slug/SlugGenerator';

interface TabContentProps {
  activeTab: string;
}

export const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'json':
        return <JsonFormatter />;
      case 'regex':
        return <RegexTester />;
      case 'markdown':
        return <MarkdownPreview />;
      case 'timestamp':
        return <TimestampConverter />;
      case 'units':
        return <UnitConverter />;
      case 'minifier':
        return <CodeMinifier />;
      case 'data':
        return <DataGenerator />;
      case 'color':
        return <ColorConverter />;
      case 'slug':
        return <SlugGenerator />;
      default:
        return <div>Select a tool to begin</div>;
    }
  };

  return (
    <div className="p-6">
      {renderContent()}
    </div>
  );
};