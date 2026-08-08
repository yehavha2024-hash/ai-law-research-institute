# AI 법률연구소

AI 민사책임을 중심으로 Agentic AI·Multi-Agent Systems, 제조물책임, 증명위험, 책임배분, 피해회복과 제한적 법적 지위를 연구하는 독립 연구 사이트입니다.

## 정식 운영 원본

이 저장소의 루트 정적파일만 AI 법률연구소의 운영 원본으로 사용합니다.

- `index.html` — 연구소 페이지 구조와 연구내용
- `style.css` — 공통 디자인과 반응형 스타일
- `script.js` — 메뉴와 화면 보조 동작
- `scripts/build-pages.mjs` — Cloudflare Pages용 정적 빌드
- `images/` — 현재 페이지 빌드에 필요한 이미지 자산
- `COPYRIGHT_STANDARD.md` — 저작권 표기 기준

과거 수동배포본, ZIP 백업본, Next/Vinext·Workers·D1 시험 스캐폴드와 중복 법률지식 프로젝트는 운영 원본에서 제거했습니다. 새로운 수정은 위 정식 운영 파일에만 반영합니다.

## Cloudflare Pages Git 연동

- 운영주소: https://yehavha-ai-law-institute.pages.dev/
- GitHub repository: `yehavha2024-hash/ai-law-research-institute`
- Production branch: `master`
- Framework preset: `None`
- Root directory: 빈칸
- Build command: `node scripts/build-pages.mjs`
- Build output directory: `dist`

`package.json`은 외부 프레임워크 의존성 없이 위 정적 빌드 명령만 선언합니다.

## Nexus 연결

Nexus의 프로젝트 정보와 업데이트 추적은 이 저장소 내부의 별도 매니페스트가 아니라 `yehavha2024-hash/yehavha-site` 저장소의 루트 `nexus.project.json`에서 단일 관리합니다.

- YEHAVHA Nexus: https://yehavha-nexus-hub.pages.dev/
- 법리·판례 연구: https://yehavha-legal-knowledge.danielie.workers.dev
- AI 법·기술 선제연구: https://yehavha-ai-foresight.pages.dev/

Copyright © 이명훈 2026. All rights reserved.
