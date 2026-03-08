const fs = require('fs');
const path = require('path');

const toolsPath = path.join(__dirname, 'components', 'Tools.tsx');
let content = fs.readFileSync(toolsPath, 'utf-8');

// Regex to find RelatedTools imports and usages
const importRegex = /import\s+\{\s*RelatedTools\s*\}\s+from\s+['"]\.\/RelatedTools['"];?\n?/;
content = content.replace(importRegex, '');

// A mapping of component name or whatever we can extract, to toolIds array
const relatedToolsRegex = /\s*<RelatedTools\s+toolIds=\{\[([^\]]+)\]\}\s*\/>/g;

// We will just remove it
content = content.replace(relatedToolsRegex, '');

fs.writeFileSync(toolsPath, content, 'utf-8');
console.log('Removed RelatedTools from Tools.tsx');
