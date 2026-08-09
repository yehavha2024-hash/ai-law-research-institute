const nexusStandard = document.createElement('link');
nexusStandard.rel = 'stylesheet';
nexusStandard.href = 'nexus-standard.css?v=20260808-2210';
nexusStandard.dataset.nexusStandard = 'true';
document.head.appendChild(nexusStandard);

const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation?.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(Boolean(isOpen)));
});

navigation?.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }
});

const stripTrailingPeriod = (element) => {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  let lastTextNode = null;
  while (walker.nextNode()) {
    if (walker.currentNode.nodeValue.trim()) lastTextNode = walker.currentNode;
  }
  if (lastTextNode) lastTextNode.nodeValue = lastTextNode.nodeValue.replace(/[.。．]+(\s*)$/, '$1');
};

document.querySelectorAll('h1,h2,h3,.focus-card strong').forEach(stripTrailingPeriod);

// 연구성과 카드의 상태 표시는 별도 행을 만들지 않고 제목 행 오른쪽에 정렬합니다.
document.querySelectorAll('.outputs-grid article').forEach((article) => {
  const heading = article.querySelector('.card-head');
  const badge = article.querySelector('.status-badge');
  if (!heading || !badge) return;

  badge.style.margin = '0 0 0 auto';
  badge.style.flex = '0 0 auto';
  badge.style.whiteSpace = 'nowrap';
  heading.appendChild(badge);
});

// 대표 연구자 영역은 프로필 이미지를 제거하고 이름을 제목과 같은 행에 배치합니다.
const researcherSection = document.querySelector('.researcher-section');
if (researcherSection) {
  researcherSection.querySelector('.researcher-visual')?.remove();

  const researcherGrid = researcherSection.querySelector('.researcher-grid');
  if (researcherGrid) researcherGrid.style.display = 'block';

  const heading = researcherSection.querySelector('h2');
  const name = researcherSection.querySelector('.researcher-name');
  if (heading && name) {
    const inlineName = document.createElement('span');
    inlineName.textContent = name.textContent.trim();
    inlineName.setAttribute('aria-label', `대표 연구자 ${inlineName.textContent}`);
    inlineName.style.marginLeft = '10px';
    inlineName.style.paddingLeft = '10px';
    inlineName.style.borderLeft = '1px solid rgba(255,255,255,.22)';
    inlineName.style.fontSize = '.62em';
    inlineName.style.fontWeight = '800';
    inlineName.style.letterSpacing = '-.02em';
    inlineName.style.whiteSpace = 'nowrap';
    heading.appendChild(inlineName);
    name.remove();
  }
}

// 하단 문의 아래에 콘텐츠 성격에 맞는 AI 활용 안내를 표시합니다.
const footerMeta = document.querySelector('.site-footer .footer-meta');
if (footerMeta && !footerMeta.querySelector('.ai-disclosure')) {
  const contact = footerMeta.querySelector('a[href^="mailto:"]')?.closest('p');
  if (contact) {
    const notice = document.createElement('p');
    notice.className = 'ai-disclosure';
    notice.textContent = 'AI 활용 안내: 일부 AI 법률 연구자료의 탐색·정리·초안 작성에 생성형 AI를 활용했으며, 법령·판례·기술자료의 확인과 연구방향·법적 분석·최종 편집은 운영자가 관리합니다. 본 사이트는 개별 법률자문을 제공하지 않습니다.';
    contact.insertAdjacentElement('afterend', notice);
  }
}