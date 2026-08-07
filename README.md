# AI 법률연구소

AI의 행위효과와 책임귀속, Agentic AI와 다중 인공지능 에이전트 시스템, 증명위험, 기능적 단위의 법적 지위, 비교법과 입법론을 연구하는 독립 연구 사이트입니다.

## 운영 원칙

이 저장소의 루트 `index.html`, `style.css`, `script.js`를 AI 법률연구소의 정식 운영 원본으로 사용합니다. 연구내용, 인터페이스, 링크와 문의정보를 수정하면 GitHub 커밋을 기준으로 Cloudflare Pages가 자동 재배포하도록 구성합니다.

기존 `cloudflare-upload/` 폴더는 과거 수동 배포본이므로 새 운영 원본으로 사용하지 않습니다. `scripts/build-pages.mjs`가 현재 루트의 최신 정적파일만 `dist/`로 복사하고 Cloudflare는 `dist/`만 배포합니다.

## Cloudflare Pages Git 연동

- GitHub repository: `yehavha2024-hash/ai-law-research-institute`
- Production branch: `master`
- Framework preset: `None`
- Root directory: 저장소 루트
- Build command: `node scripts/build-pages.mjs`
- Build output directory: `dist`

새 Git-connected Pages 프로젝트가 정상 배포된 뒤 실제 `pages.dev` 주소를 YEHAVHA Nexus에 등록합니다. 기존 Worker 주소는 새 주소가 검증되기 전까지 유지합니다.

## 통합 연결

- YEHAVHA Nexus: https://yehavha-nexus-hub.pages.dev/
- 문의: kimbrighth@gmail.com

Copyright © 이명훈 2026. All rights reserved.
