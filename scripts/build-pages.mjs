import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const OUT = path.join(ROOT, 'dist');
const files = ['index.html', 'style.css', 'script.js'];

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

for (const file of files) {
  const source = path.join(ROOT, file);
  if (!fs.existsSync(source)) throw new Error(`Missing deployment source: ${file}`);
  fs.copyFileSync(source, path.join(OUT, file));
}

const index = fs.readFileSync(path.join(OUT, 'index.html'), 'utf8');
for (const required of ['AI 법률연구소', 'style.css', 'script.js']) {
  if (!index.includes(required)) throw new Error(`Deployment validation failed: ${required}`);
}

console.log(`AI 법률연구소 Pages build complete: ${files.join(', ')}`);
