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

  const researcherLead = document.querySelector('.researcher-lead');
  if (researcherLead && !document.querySelector('.researcher-award')) {
    const award = document.createElement('p');
    award.className = 'researcher-award';
    award.textContent = '★ 석사학위논문 우수논문상';
    researcherLead.before(award);
  }
})();
