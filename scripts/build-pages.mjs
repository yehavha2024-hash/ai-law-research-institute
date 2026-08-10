import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const OUT = path.join(ROOT, 'dist');
const coreFiles = [
  'index.html',
  'style.css',
  'nexus-standard.css',
  'project-standard.css',
  'script.js',
  '_headers'
];
const imagePattern = /\.(png|jpe?g|webp|svg)$/i;
const imageFiles = fs.readdirSync(ROOT).filter(file => imagePattern.test(file));
const files = [...coreFiles, ...imageFiles];

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

for (const file of files) {
  fs.copyFileSync(path.join(ROOT, file), path.join(OUT, file));
}

const index = fs.readFileSync(path.join(OUT, 'index.html'), 'utf8');
for (const required of ['AI 법률연구소', 'style.css', 'nexus-standard.css', 'project-standard.css', 'script.js']) {
  if (!index.includes(required)) throw new Error(`Deployment validation failed: ${required}`);
}

console.log(`AI 법률연구소 Pages build complete: ${files.join(', ')}`);
