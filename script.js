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

  const researcherProfile = document.querySelector('#researcher .profile-list');
  if (researcherProfile && !researcherProfile.querySelector('.research-identifiers')) {
    const row = document.createElement('p');
    row.className = 'research-identifiers';

    const label = document.createElement('b');
    label.textContent = '연구자 식별정보';

    const identifiers = document.createElement('span');
    identifiers.textContent = 'ISNI 0000000513760591 · ORCID 0009-0000-6095-8067 · 국가연구자번호 13169680';

    row.append(label, identifiers);
    researcherProfile.append(row);
  }

})();
