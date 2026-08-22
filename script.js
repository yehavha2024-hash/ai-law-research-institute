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
    award.textContent = '★ 석사학위논문 우수논문상 수상';
    researcherLead.before(award);
  }

  const footer = document.querySelector('.site-footer');
  const footerMeta = footer?.querySelector('.footer-meta');
  if (footer && footerMeta) {
    footer.dataset.footerStandard = 'v2';
    if (!footerMeta.querySelector('.footer-business')) {
      const business = document.createElement('p');
      business.className = 'footer-business';
      business.textContent = '스카이예슈아 · 사업자등록번호 536-38-01234 · 대표 이명훈';
      footerMeta.prepend(business);
    }
  }
})();
