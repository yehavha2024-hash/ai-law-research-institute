# AI 법률연구소

AI 민사책임을 중심으로 Agentic AI·Multi-Agent Systems, 제조물책임, 증명위험, 책임배분, 피해회복과 제한적 법적 지위를 연구하는 독립 연구 사이트입니다.

## 운영 구조

- `index.html` — 페이지 구조와 내용
- `style.css` — 기본 레이아웃과 공통 스타일
- `nexus-standard.css` — 최소 공통 연결 스타일
- `project-standard.css` — 연구소 테마와 정적 수상 이미지 스타일
- `script.js` — 모바일 메뉴 동작만 담당
- `scripts/build-pages.mjs` — Cloudflare Pages용 정적 파일 복사
- `award-master-thesis.png` — 연구자 섹션 수상 이미지

이미지는 PNG 원본만 사용하며 JPG·SVG 대체 자산과 런타임 이미지 삽입 로직은 사용하지 않습니다.

## Cloudflare Pages

- Production branch: `master`
- Build command: `node scripts/build-pages.mjs`
- Build output directory: `dist`

Copyright © 이명훈 2026. All rights reserved.
