# AI 법률연구소

AI 민사책임을 중심으로 Agentic AI·Multi-Agent Systems, 제조물책임, 증명위험, 책임배분, 피해회복과 제한적 법적 지위를 연구하는 독립 연구 사이트입니다.

## 운영 구조

- `index.html` — 페이지 구조와 연구 내용
- `style.css` — 기본 레이아웃과 공통 스타일
- `nexus-standard.css` — Nexus 연결 공통 스타일
- `project-standard.css` — 연구소 전용 표시 규격
- `script.js` — 모바일 메뉴 동작만 담당
- `_headers` — 정적 파일 캐시 및 기본 응답 헤더 관리
- `scripts/build-pages.mjs` — Cloudflare Pages용 운영 파일을 `dist/`에 복사

연구자 영역과 수상 이력 등 페이지 정보는 현재 HTML 텍스트 구조로 관리합니다. 사용하지 않는 이미지 대체본이나 런타임 이미지 삽입 로직은 두지 않습니다.

## Cloudflare Pages

- Production branch: `master`
- Build command: `node scripts/build-pages.mjs`
- Build output directory: `dist`

빌드 대상은 `index.html`, 세 개의 운영 CSS, `script.js`, `_headers`로 한정합니다. `dist/`는 빌드 산출물이며 운영 원본은 저장소 루트 파일입니다.

Copyright © 이명훈 2026. All rights reserved.
