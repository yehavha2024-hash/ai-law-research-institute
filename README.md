# AI 법률연구소

AI 민사책임, Agentic AI·Multi-Agent Systems, 제조물책임, 증명위험, 책임배분과 제한적 법적 지위를 연구하는 정적 연구 사이트입니다.

## 운영 파일과 책임

각 파일의 책임을 한 곳으로 고정합니다.

- `index.html` — 문서 구조와 연구내용
- `style.css` — 기본 레이아웃과 컴포넌트
- `nexus-standard.css` — Nexus 돌아가기 링크와 reduced-motion 규칙만 담당
- `project-standard.css` — 색상·가독성 테마와 연구자 수상 이미지 표시만 담당
- `script.js` — 모바일 메뉴 열기·닫기만 담당
- `award-master-thesis.jpg` — 연구자 수상 이미지 단일 원본
- `scripts/build-pages.mjs` — Cloudflare Pages용 정적 파일 복사
- `COPYRIGHT_STANDARD.md` — 저작권 표기 문서이며 실행 코드에 관여하지 않음

자바스크립트에서 이미지, 이름, CSS, 푸터 또는 레이아웃을 생성하거나 수정하지 않습니다.

## 이미지 교체 원칙

연구자 수상 이미지는 항상 `award-master-thesis.jpg` 한 파일만 사용합니다. 이후 이미지를 바꿀 때는 같은 파일명으로 이미지만 교체하며 HTML·CSS·JavaScript 로직을 추가하지 않습니다.

## Cloudflare Pages

- Production branch: `master`
- Build command: `node scripts/build-pages.mjs`
- Build output directory: `dist`

Copyright © 이명훈 2026. All rights reserved.
