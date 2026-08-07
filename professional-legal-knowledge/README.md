# 전문 법률지식 · Advanced Legal Knowledge

변호사시험·법무사·변리사·LEET 수준을 기준으로 실정법, 법리, 판례와 법적 추론을 누적하는 독립 정적 웹페이지입니다.

## 현재 공개 구조

- `index.html` — 메인 페이지, 면책 고지, 연구 방식
- `style.css` — 반응형 전문 법률 아카이브 UI
- `data.js` — 법률 콘텐츠 원본 데이터
- `app.js` — 검색, 분야 필터, 상세보기

## 운영 원칙

데일리 연재가 아니라 **콘텐츠 단위 누적형**으로 운영합니다. 하나의 법리 또는 판례 묶음을 검토 가능한 수준으로 완성한 뒤 `data.js`에 추가합니다.

각 콘텐츠에는 다음 항목을 유지합니다.

1. 분야
2. 제목
3. 난도
4. 최종 검토일
5. 시험·연구 태그
6. 요약
7. 관련 조문
8. 핵심 법리
9. 쟁점 체크
10. 법적 추론 포인트
11. 판례 사실관계와 핵심 판단
12. 공식 출처

## 초기 공개판

초기 공개판은 민법 핵심 법리, 지식재산법, 법적 추론을 중심으로 구성합니다. 이후 민사소송·민사집행, 형사법, 공법, 상법, 지식재산 심화 영역을 단계적으로 추가합니다.

## Cloudflare Pages 연결 권장값

이 저장소를 새 Cloudflare Pages 프로젝트에 Git 연동할 경우 다음과 같이 구성할 수 있습니다.

- Repository: `yehavha2024-hash/ai-law-research-institute`
- Production branch: `master`
- Root directory: `professional-legal-knowledge`
- Framework preset: None
- Build command: 없음
- Build output directory: `.`

Cloudflare UI에서 Root directory를 사용하지 않는 방식이라면 저장소 루트를 기준으로 Build output directory를 `professional-legal-knowledge`로 지정합니다.

## 콘텐츠 업데이트

법령 개정이나 주요 판례 변화가 있을 때 기존 항목의 `reviewed` 날짜와 내용을 함께 갱신합니다. 단순 추가보다 기존 자료의 최신성 검토를 우선합니다.

## 법률정보 고지

이 자료는 연구·학습 목적의 참고자료이며 개별 사건에 대한 법률자문이나 시험 결과를 보장하지 않습니다. 실제 적용 전 국가법령정보센터, 대한민국 법원 등 공식 자료에서 최신 법령과 판례를 확인해야 합니다.

Copyright © 이명훈 2026. All rights reserved.
