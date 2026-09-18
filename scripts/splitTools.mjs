import fs from 'fs';
import path from 'path';

const toolsFile = 'components/Tools.tsx';
const outDir = 'components/calculators';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const code = fs.readFileSync(toolsFile, 'utf8');

// The common imports header from Tools.tsx
const headerLines = [
  "import React, { useState, useEffect, useMemo } from 'react';",
  "import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';",
  "import {",
  "  SALARIED_TAX_SLABS, NON_SALARIED_TAX_SLABS, SURCHARGE_THRESHOLD, SURCHARGE_RATE,",
  "  NISAB_GOLD_GRAMS, NISAB_SILVER_GRAMS, GOVERNMENT_NISAB_2026, DEDUCTION_DATE_2026",
  "} from '../constants';",
  "import { getFinancialAdvice } from '../services/geminiService';",
  "import * as InfoPages from '../components/InfoPages';",
  "const COLORS = ['#10b981', '#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899'];"
].join('\n');

// A more robust regex that splits by "export const ToolName = "
// We will split the file by "export const " and process each chunk
const chunks = code.split('export const ');

let count = 0;
for (let i = 1; i < chunks.length; i++) { // skip 0 as it's the header
  const chunk = chunks[i];
  const match = /^([A-Za-z0-9_]+) =/.exec(chunk);
  if (match) {
    const toolName = match[1];
    let toolCode = 'export const ' + chunk;
    
    // Replace InfoPages static imports in toolCode with the namespace
    toolCode = toolCode.replace(/([A-Za-z0-9_]+BlogContent|[A-Za-z0-9_]+SEOArticle)/g, "InfoPages.$1");
    
    const fileContent = `${headerLines}\n\n${toolCode}\n`;
    fs.writeFileSync(path.join(outDir, `${toolName}.tsx`), fileContent);
    count++;
  }
}

console.log(`Successfully split ${count} components.`);
