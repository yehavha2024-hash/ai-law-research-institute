# YEHAVHA Project Copyright Footer Standard

AI 법률연구소의 웹 하단 권리표기는 YEHAVHA Nexus 메인의 중앙정렬 단일열 Footer를 기준으로 통일합니다. 데스크톱과 모바일 모두 좌측정렬·우측정렬·2열 Footer로 변경하지 않습니다.

## 고정 표시 순서

1. `AI 법률연구소`
2. `AI Law · Responsibility · Agentic AI · Multi-Agent`
3. `스카이예슈아 · 사업자등록번호 536-38-01234 · 대표 이명훈`
4. `Copyright © 이명훈 2026. All rights reserved.`
5. `문의 kimbrighth@gmail.com`
6. `AI 활용 안내: 일부 AI 법률 연구자료의 탐색·정리·초안 작성에 생성형 AI를 활용했으며, 법령·판례·기술자료의 확인과 연구방향·법적 분석·최종 편집은 운영자가 관리합니다. 본 사이트는 개별 법률자문을 제공하지 않습니다.`
7. `맨 위로 이동 ↑`

데스크톱과 모바일 모두 위 순서와 중앙정렬을 유지합니다. 프로젝트 URL은 Footer에 중복 노출하지 않습니다.

## 데이터 소유 원칙

Copyright·문의·AI 활용 안내·맨 위로 이동은 실제 HTML 요소를 유지합니다. 사업자정보는 독립 저장소의 공통 Footer 코드에서 한 번만 관리하고 중복 생성하지 않습니다. Footer 전체를 CSS 가상요소나 별도 보정 레이어로 다시 만들지 않습니다.

## 타이포그래피

공통 서체: `Pretendard, "Noto Sans KR", "Apple SD Gothic Neo", system-ui, -apple-system, sans-serif`

- 프로젝트명: 13px / 600 / line-height 1.5
- 영문 설명: 11px / 400 / line-height 1.7
- 사업자정보: 12px / 400 / line-height 1.7
- Copyright: 12px / 400 / line-height 1.7
- 문의: 12px / 400 / line-height 1.7
- AI 활용 안내: 11.5px / 400 / line-height 1.7
- 맨 위로 이동: 11px / 600 / line-height 1.7
- letter-spacing: 0

Footer에는 Georgia, Noto Serif KR 등 명조·장식용 서체를 사용하지 않습니다.

## 색상과 간격

- 전체 정렬: `text-align:center`
- 배경: `#050b19`
- 상단 경계선: `rgba(255,255,255,.09)`
- 프로젝트명: `#d7e1ea`
- 기본 텍스트: `#8fa1b3`
- 링크: `#a9bfd2`
- 상하 여백: 약 32~36px
- 프로젝트 정보와 권리정보 사이에는 얇은 구분선 1개

모바일에서 좌측정렬로 전환하지 않습니다.

## 재발 방지

- `style.css`의 과거 2열 Footer 규칙보다 `project-standard.css`의 Nexus v2 Footer 규칙이 최종 소유자가 됩니다.
- 모바일 미디어쿼리에서도 Footer를 좌측정렬로 바꾸지 않습니다.
- 사업자정보·Copyright·문의·AI 안내·맨 위로 이동의 순서를 변경하지 않습니다.
- Footer 수정 시 별도 `fix.css`, `patch.css`, `override.css`를 추가하지 않고 기존 canonical owner를 수정합니다.
