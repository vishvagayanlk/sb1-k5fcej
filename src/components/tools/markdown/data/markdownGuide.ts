export const markdownGuide = {
  'Basic Syntax': [
    {
      title: 'Headers',
      example: '# H1\n## H2\n### H3',
    },
    {
      title: 'Emphasis',
      example: '*italic* or _italic_\n**bold** or __bold__\n***bold italic***',
    },
    {
      title: 'Lists',
      example: '1. Ordered item\n2. Another item\n\n- Unordered item\n- Another item',
    },
  ],
  'Extended Syntax': [
    {
      title: 'Tables',
      example: '| Header 1 | Header 2 |\n|----------|----------|\n| Cell 1   | Cell 2   |',
    },
    {
      title: 'Code Blocks',
      example: '```javascript\nconst hello = "world";\nconsole.log(hello);\n```',
    },
    {
      title: 'Task Lists',
      example: '- [x] Completed task\n- [ ] Incomplete task',
    },
  ],
  'Math & Diagrams': [
    {
      title: 'Math Equations',
      example: '$E = mc^2$\n\n$$\n\\frac{n!}{k!(n-k)!}\n$$',
    },
    {
      title: 'Footnotes',
      example: 'Here is a footnote reference[^1]\n\n[^1]: Here is the footnote.',
    },
  ],
} as const;