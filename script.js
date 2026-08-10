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

  const researcherSection = document.querySelector('#researcher');
  if (researcherSection) {
    const grid = researcherSection.querySelector('.researcher-grid');
    if (grid) grid.style.gridTemplateColumns = '1fr';

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

    researcherSection.querySelectorAll('.researcher-award-visual').forEach(node => node.remove());
    const currentHeading = researcherSection.querySelector('h2');
    if (currentHeading) {
      const figure = document.createElement('figure');
      figure.className = 'researcher-award-visual';
      figure.style.margin = '18px 0 20px';
      figure.style.width = 'min(100%, 420px)';
      figure.style.padding = '8px';
      figure.style.border = '1px solid rgba(255,255,255,.16)';
      figure.style.borderRadius = '14px';
      figure.style.background = '#071626';
      figure.style.boxShadow = '0 16px 36px rgba(0,0,0,.20)';

      const awardImage = document.createElement('img');
      awardImage.src = 'award-master-thesis.svg?v=20260810-2';
      awardImage.alt = '석사학위기 수여식, 석사학위논문 우수논문상, 대표 수상자';
      awardImage.loading = 'lazy';
      awardImage.decoding = 'async';
      awardImage.style.display = 'block';
      awardImage.style.width = '100%';
      awardImage.style.height = 'auto';
      awardImage.style.objectFit = 'contain';
      awardImage.style.borderRadius = '9px';

      figure.appendChild(awardImage);
      currentHeading.insertAdjacentElement('afterend', figure);
    }
  }

  document.querySelectorAll('a[href="#top"]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      history.replaceState(null, '', location.pathname + location.search + '#top');
    });
  });

  document.querySelectorAll('h1,h2,h3,.focus-card strong').forEach(stripTrailingPeriod);

  document.querySelectorAll('.outputs-grid article').forEach(article => {
    const heading = article.querySelector('.card-head');
    const badge = article.querySelector('.status-badge');
    if (heading && badge) heading.appendChild(badge);
  });
})();
