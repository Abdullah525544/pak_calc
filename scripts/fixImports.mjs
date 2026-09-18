import fs from 'fs';
import path from 'path';

const outDir = 'components/calculators';
const files = fs.readdirSync(outDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(outDir, file);
  let code = fs.readFileSync(filePath, 'utf8');
  code = code.replace(/from '\.\.\/components\/InfoPages'/g, "from '../InfoPages'");
  fs.writeFileSync(filePath, code);
}
console.log('Fixed InfoPages imports');
