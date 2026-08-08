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

const profileImage = document.querySelector('.researcher-visual img');
if (profileImage) {
  const source = 'https://raw.githubusercontent.com/yehavha2024-hash/ai-law-research-institute/master/images/researcher-profile.png';
  profileImage.referrerPolicy = 'no-referrer';
  profileImage.decoding = 'async';
  profileImage.loading = 'eager';
  profileImage.src = source;
  profileImage.addEventListener('error', () => {
    profileImage.src = `${source}?v=20260808`;
  }, { once: true });
}

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