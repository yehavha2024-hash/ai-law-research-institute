import fs from 'node:fs';

let errors = 0;
const fail = message => { console.error(`ERROR: ${message}`); errors += 1; };

const index = fs.readFileSync('index.html', 'utf8');
const script = fs.readFileSync('script.js', 'utf8');

if (!index.includes('data-footer-standard="v1"')) fail('표준 footer 식별자 없음');
if (!index.includes('AI 활용 안내')) fail('정적 AI 활용 안내 없음');
if (!index.includes('Copyright ©')) fail('Copyright 없음');
if (!index.includes('mailto:')) fail('문의 링크 없음');
if (!index.includes('project-standard.css')) fail('project-standard.css 연결 없음');
if (!index.includes('nexus-standard.css')) fail('nexus-standard.css 정적 연결 없음');
if (/createElement\(['"](?:style|link)['"]\)/.test(script)) fail('script.js가 스타일 자산을 런타임 생성');
if (/site-footer|footerMeta|ai-disclosure/.test(script)) fail('script.js가 메인 footer를 소유');
if (/\.style\./.test(script)) fail('script.js에 인라인 스타일 조작 존재');
if (/new\s+MutationObserver/.test(script)) fail('MutationObserver 사용');

console.log(`AI Law Institute architecture audit: ${errors} error(s)`);
if (errors) process.exit(1);
