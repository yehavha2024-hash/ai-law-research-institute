import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const OUT = path.join(ROOT, 'dist');
const files = [
  'index.html',
  'style.css',
  'nexus-standard.css',
  'project-standard.css',
  'script.js',
  '_headers'
];

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

for (const file of files) {
  fs.copyFileSync(path.join(ROOT, file), path.join(OUT, file));
}

console.log(`AI 법률연구소 Pages build complete: ${files.join(', ')}`);