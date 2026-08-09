(() => {
  'use strict';

  const menuButton = document.querySelector('.menu-button');
  const navigation = document.querySelector('#main-nav');

  menuButton?.addEventListener('click', () => {
    const isOpen = navigation?.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(Boolean(isOpen)));
  });

  navigation?.addEventListener('click', event => {
    if (!event.target.closest('a')) return;
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });

  const stripTrailingPeriod = element => {
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    let lastTextNode = null;
    while (walker.nextNode()) {
      if (walker.currentNode.nodeValue.trim()) lastTextNode = walker.currentNode;
    }
    if (lastTextNode) lastTextNode.nodeValue = lastTextNode.nodeValue.replace(/[.。．]+(\s*)$/, '$1');
  };

  document.querySelectorAll('h1,h2,h3,.focus-card strong').forEach(stripTrailingPeriod);

  document.querySelectorAll('.outputs-grid article').forEach(article => {
    const heading = article.querySelector('.card-head');
    const badge = article.querySelector('.status-badge');
    if (heading && badge) heading.appendChild(badge);
  });

  const researcherSection = document.querySelector('.researcher-section');
  if (researcherSection) {
    const heading = researcherSection.querySelector('h2');
    const name = researcherSection.querySelector('.researcher-name');
    if (heading && name && !heading.querySelector('.researcher-inline-name')) {
      const inlineName = document.createElement('span');
      inlineName.className = 'researcher-inline-name';
      inlineName.textContent = name.textContent.trim();
      inlineName.setAttribute('aria-label', `대표 연구자 ${inlineName.textContent}`);
      heading.appendChild(inlineName);
      name.remove();
    }
  }
})();
