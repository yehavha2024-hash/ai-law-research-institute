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
  'award-master-thesis.svg',
  '_headers'
];

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

for (const file of files) {
  const source = path.join(ROOT, file);
  if (!fs.existsSync(source)) throw new Error(`Missing deployment source: ${file}`);
  fs.copyFileSync(source, path.join(OUT, file));
}

const index = fs.readFileSync(path.join(OUT, 'index.html'), 'utf8');
for (const required of ['AI 법률연구소', 'style.css', 'nexus-standard.css', 'project-standard.css', 'script.js']) {
  if (!index.includes(required)) throw new Error(`Deployment validation failed: ${required}`);
}

for (const forbidden of ['researcher-profile.png', 'researcher-visual', '<img', '<picture']) {
  if (index.includes(forbidden)) throw new Error(`Deployment validation failed: forbidden researcher image reference ${forbidden}`);
}

const awardAsset = path.join(OUT, 'award-master-thesis.svg');
if (!fs.existsSync(awardAsset)) {
  throw new Error('Deployment validation failed: award-master-thesis.svg was not copied');
}

if (fs.existsSync(path.join(OUT, 'images'))) {
  throw new Error('Deployment validation failed: images directory must not be deployed');
}

console.log(`AI 법률연구소 Pages build complete: ${files.join(', ')}`);
