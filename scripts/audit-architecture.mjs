import fs from 'node:fs';

let errors = 0;
const fail = message => { console.error(`ERROR: ${message}`); errors += 1; };

const index = fs.readFileSync('index.html', 'utf8');
const script = fs.readFileSync('script.js', 'utf8');
const projectCss = fs.readFileSync('project-standard.css', 'utf8');

if (!index.includes('data-footer-standard="v1"')) fail('표준 footer 식별자 없음');
if (!index.includes('AI 활용 안내')) fail('정적 AI 활용 안내 없음');
if (!index.includes('Copyright ©')) fail('Copyright 없음');
if (!index.includes('mailto:')) fail('문의 링크 없음');
if (!index.includes('project-standard.css')) fail('project-standard.css 연결 없음');
if (!index.includes('nexus-standard.css')) fail('nexus-standard.css 정적 연결 없음');

const ids = new Set([...index.matchAll(/\bid=["']([^"']+)["']/g)].map(match => match[1]));
const idList = [...index.matchAll(/\bid=["']([^"']+)["']/g)].map(match => match[1]);
for (const id of new Set(idList.filter((value, i) => idList.indexOf(value) !== i))) fail(`중복 id 발견: #${id}`);
for (const target of new Set([...index.matchAll(/\bhref=["']#([^"']+)["']/g)].map(match => match[1]))) {
  if (!ids.has(target)) fail(`내부 링크 #${target}의 대상 id 없음`);
}
if (/맨 위로/.test(index) && !/href=["']#top["']/.test(index)) fail('맨 위로 링크가 #top을 가리키지 않음');

const researcherMatch = index.match(/<section[^>]*class=["'][^"']*researcher-section[^"']*["'][\s\S]*?<\/section>/i);
const researcherHtml = researcherMatch?.[0] || '';
if (!researcherHtml) fail('연구자 섹션 없음');
if (/<(?:img|picture)\b/i.test(researcherHtml)) fail('연구자 섹션에 이미지 마크업 존재');
if (/researcher-visual|researcher-photo|profile-image|portrait/i.test(researcherHtml)) fail('연구자 섹션에 과거 이미지 슬롯 마크업 존재');
if (!/\.researcher-section img[\s\S]*display:none!important/.test(projectCss)) fail('과거 이미지 마크업 방어 규칙 없음');
if (!/grid-template-columns:1fr!important/.test(projectCss)) fail('연구자 단일열 레이아웃 강제 규칙 없음');

if (/createElement\(['"](?:style|link)['"]\)/.test(script)) fail('script.js가 스타일 자산을 런타임 생성');
if (/site-footer|footerMeta|ai-disclosure/.test(script)) fail('script.js가 메인 footer를 소유');
if (/\.style\./.test(script)) fail('script.js에 인라인 스타일 조작 존재');
if (/new\s+MutationObserver/.test(script)) fail('MutationObserver 사용');
if (!/a\[href=["']#top["']\]/.test(script)) fail('모바일용 명시적 맨 위로 동작 없음');

console.log(`AI Law Institute architecture audit: ${errors} error(s)`);
if (errors) process.exit(1);
