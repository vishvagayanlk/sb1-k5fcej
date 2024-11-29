import React from 'react';
import { useRouter } from 'next/router';
import { tools } from '../../components/dashboard/tools';
import { motion } from 'framer-motion';
import { ToolLayout } from '../../components/tools/layout/ToolLayout';
import { JsonFormatter } from '../../components/tools/json/JsonFormatter';
import { RegexTester } from '../../components/tools/regex/RegexTester';

const ToolPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const tool = tools.find(t => t.id === id);
  
  if (!tool) {
    return <div>Tool not found</div>;
  }

  const renderTool = () => {
    switch (tool.id) {
      case 'json':
        return <JsonFormatter />;
      case 'regex':
        return <RegexTester />;
      default:
        return <div>Tool implementation coming soon</div>;
    }
  };

  return (
    <ToolLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-panel p-6"
      >
        <h1 className="text-2xl font-cal mb-4">{tool.name}</h1>
        {renderTool()}
      </motion.div>
    </ToolLayout>
  );
};

export default ToolPage;