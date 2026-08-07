const NEXUS_URL = 'https://yehavha-nexus-hub.pages.dev/';
const CONTACT_EMAIL = 'kimbrighth@gmail.com';

const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigation?.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }
});

const header = document.querySelector('.header');
if (header && !header.querySelector('.nexus-home-link')) {
  const link = document.createElement('a');
  link.className = 'nexus-home-link';
  link.href = NEXUS_URL;
  link.textContent = '← YEHAVHA NEXUS';
  link.setAttribute('aria-label', '예하바 넥서스로 돌아가기');
  link.style.cssText = 'display:inline-flex;align-items:center;margin-right:auto;color:#86abd0;text-decoration:none;font-size:.78rem;font-weight:800;letter-spacing:.08em;white-space:nowrap;';
  header.insertBefore(link, header.firstChild);
}

const footerMeta = document.querySelector('footer > div');
if (footerMeta) {
  footerMeta.innerHTML = `
    <span>Copyright © 이명훈 2026. All rights reserved.</span>
    <span>문의 <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></span>
    <a href="#top">맨 위로 이동 ↑</a>
  `;
  footerMeta.style.flexWrap = 'wrap';
  footerMeta.style.gap = '12px 20px';
}

document.querySelector('#contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`[AI 법률연구소 문의] ${data.get('type')}`);
  const body = encodeURIComponent(`이름 / 기관: ${data.get('name')}\n이메일: ${data.get('email')}\n문의 유형: ${data.get('type')}\n\n${data.get('message')}`);
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});
