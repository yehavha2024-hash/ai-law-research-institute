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