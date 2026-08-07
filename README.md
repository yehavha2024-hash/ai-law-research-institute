# AI 법률연구소

AI의 행위효과와 책임귀속, Agentic AI와 다중 인공지능 에이전트 시스템, 창발적 손해와 계층적 책임, 증명위험, 기능적 단위의 법적 지위, AI 거버넌스·비교법·입법론을 연구하는 독립 연구 사이트입니다.

## 운영 원칙

이 저장소의 루트 `index.html`, `style.css`, `script.js`를 AI 법률연구소의 정식 운영 원본으로 사용합니다. 연구내용, 인터페이스, 링크와 문의정보를 수정하면 GitHub 커밋을 기준으로 Cloudflare Pages가 자동 재배포됩니다.

기존 `cloudflare-upload/` 폴더는 과거 수동 배포본이므로 새 운영 원본으로 사용하지 않습니다. `scripts/build-pages.mjs`가 현재 루트의 최신 정적파일만 `dist/`로 복사하고 Cloudflare는 `dist/`만 배포합니다.

## 사이트 정보구조

- 연구소 소개와 연구명제
- 핵심 연구분야
- 현재 연구와 연구계보
- 통합 분석체계와 법률영역 횡단연구
- 연구 아카이브
- 대표 연구자
- 연구자료 운영기준과 문의

## Cloudflare Pages Git 연동

- 운영주소: https://yehavha-ai-law-institute.pages.dev/
- GitHub repository: `yehavha2024-hash/ai-law-research-institute`
- Production branch: `master`
- Framework preset: `None`
- Root directory: 빈칸(저장소 루트)
- Build command: `node scripts/build-pages.mjs`
- Build output directory: `dist`

## 통합 연결

- YEHAVHA Nexus: https://yehavha-nexus.pages.dev/
- 문의: kimbrighth@gmail.com

Copyright © 이명훈 2026. All rights reserved.
