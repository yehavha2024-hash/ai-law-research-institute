import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const OUT = path.join(ROOT, 'dist');
const files = ['index.html', 'style.css', 'script.js'];
const directories = ['images'];

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

for (const file of files) {
  const source = path.join(ROOT, file);
  if (!fs.existsSync(source)) throw new Error(`Missing deployment source: ${file}`);
  fs.copyFileSync(source, path.join(OUT, file));
}

for (const directory of directories) {
  const source = path.join(ROOT, directory);
  if (!fs.existsSync(source)) throw new Error(`Missing deployment directory: ${directory}`);
  fs.cpSync(source, path.join(OUT, directory), { recursive: true });
}

const index = fs.readFileSync(path.join(OUT, 'index.html'), 'utf8');
for (const required of ['AI 법률연구소', 'style.css', 'script.js', 'images/researcher-profile.png']) {
  if (!index.includes(required)) throw new Error(`Deployment validation failed: ${required}`);
}

const profileImage = path.join(OUT, 'images', 'researcher-profile.png');
if (!fs.existsSync(profileImage)) {
  throw new Error('Deployment validation failed: researcher profile image was not copied');
}

console.log(`AI 법률연구소 Pages build complete: ${files.join(', ')}, ${directories.join(', ')}`);
