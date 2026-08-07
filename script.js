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

(() => {
  const profileImage = document.querySelector('.researcher-visual img');
  if (!profileImage) return;

  const absoluteProfileSource = 'https://raw.githubusercontent.com/yehavha2024-hash/ai-law-research-institute/master/images/researcher-profile.png';

  profileImage.referrerPolicy = 'no-referrer';
  profileImage.decoding = 'async';
  profileImage.loading = 'eager';
  profileImage.src = absoluteProfileSource;

  profileImage.addEventListener('error', () => {
    profileImage.removeAttribute('srcset');
    profileImage.src = `${absoluteProfileSource}?v=20260808`;
  }, { once: true });
})();

(() => {
  const style = document.createElement('style');
  style.id = 'visual-system-style';
  style.textContent = `
    :root{
      --ui-font:Pretendard,"Noto Sans KR","Apple SD Gothic Neo",system-ui,-apple-system,sans-serif;
      --ui-max:1180px;
      --ui-h1:clamp(42px,5vw,64px);
      --ui-h2:clamp(30px,3.5vw,40px);
      --ui-h3:20px;
      --ui-body:15px;
      --ui-small:12px;
      --ui-label:10px;
    }
    html,body,button,input,select,textarea{font-family:var(--ui-font)!important}
    body{font-size:var(--ui-body)!important;line-height:1.82!important;letter-spacing:-.018em!important;word-break:keep-all}
    .wrap,.header-inner{width:min(var(--ui-max),calc(100% - 48px))!important}
    .header-inner{height:80px!important}
    .brand-mark,.brand strong,.brand small,
    h1,h2,h3,.hero-panel strong,.intro-statement,.thesis-statement,
    .about-grid strong,.research-axis>span,.research-axis h3,
    .project-card h3,.method-grid strong,.matrix-grid h3,
    .archive-card h3,.researcher-name,.profile-list strong,
    .footer-inner strong{font-family:var(--ui-font)!important}
    .brand-mark{font-size:12px!important;font-weight:800!important;letter-spacing:.08em!important}
    .brand strong{font-size:15px!important;font-weight:750!important;line-height:1.25!important;letter-spacing:-.02em!important}
    .brand small{font-size:8px!important;font-weight:650!important;letter-spacing:.11em!important}
    #main-nav{font-size:12px!important;font-weight:650!important;gap:24px!important}
    .nexus-link{font-size:10px!important}

    .hero{padding-top:150px!important}
    .hero-grid{grid-template-columns:minmax(0,1fr) 330px!important;gap:64px!important}
    .eyebrow,.panel-label,.project-meta span,.archive-card>span{font-family:var(--ui-font)!important;font-size:var(--ui-label)!important;font-weight:800!important;letter-spacing:.15em!important}
    .hero h1{font-family:var(--ui-font)!important;font-size:var(--ui-h1)!important;font-weight:780!important;line-height:1.17!important;letter-spacing:-.045em!important}
    .hero h1 em{font-weight:650!important}
    .lead{font-size:16px!important;line-height:1.9!important;max-width:740px!important;margin-top:26px!important}
    .hero-panel strong{font-size:21px!important;font-weight:750!important;line-height:1.5!important;letter-spacing:-.025em!important}
    .hero-panel>p:last-child{font-size:13px!important;line-height:1.8!important}
    .principle-line{margin-top:54px!important}
    .principle-line span{font-size:12px!important;line-height:1.6!important}

    .section{padding:88px 0!important}
    .split-heading,.standards-grid{grid-template-columns:250px minmax(0,1fr)!important;gap:64px!important}
    .split-heading h2,.section-head h2,.researcher-copy h2,.standards-grid h2{font-family:var(--ui-font)!important;font-size:var(--ui-h2)!important;font-weight:760!important;line-height:1.32!important;letter-spacing:-.038em!important}
    .section-head{align-items:flex-end!important;gap:48px!important}
    .section-head>p{font-size:14px!important;line-height:1.75!important;max-width:440px!important}
    .intro-statement,.thesis-statement{font-size:22px!important;font-weight:700!important;line-height:1.65!important;letter-spacing:-.03em!important}
    .about-body>p:not(.intro-statement),.thesis-body>p:not(.thesis-statement){font-size:15px!important;line-height:1.9!important}

    .about-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;margin-top:42px!important}
    .about-grid article{min-height:160px!important;padding:24px!important}
    .about-grid article>span{font-family:var(--ui-font)!important;font-size:12px!important;font-weight:750!important}
    .about-grid strong{margin:20px 0 9px!important;font-size:18px!important;font-weight:750!important;line-height:1.4!important}
    .about-grid p{font-size:13px!important;line-height:1.75!important}

    .research-grid{margin-top:42px!important}
    .research-axis{min-height:265px!important;padding:26px 28px!important}
    .research-axis>span{font-size:12px!important;font-weight:750!important}
    .research-axis h3{margin:28px 0 12px!important;font-size:var(--ui-h3)!important;font-weight:750!important;line-height:1.45!important;letter-spacing:-.028em!important}
    .research-axis p{font-size:14px!important;line-height:1.82!important}

    .project-grid{grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:14px!important;margin-top:42px!important}
    .project-card{min-height:390px!important;padding:28px!important}
    .project-card h3{margin:30px 0 9px!important;font-size:var(--ui-h3)!important;font-weight:750!important;line-height:1.45!important;letter-spacing:-.028em!important}
    .project-card .project-subtitle{font-size:12px!important}
    .project-card>p:not(.project-subtitle){font-size:13px!important;line-height:1.82!important}

    .method-grid{grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:12px!important;margin-top:30px!important}
    .method-grid article{min-height:190px!important;padding:22px!important}
    .method-grid strong{font-size:17px!important;font-weight:750!important;line-height:1.4!important}
    .method-grid p{font-size:13px!important;line-height:1.8!important}

    .matrix-grid{margin-top:38px!important}
    .matrix-grid h3{font-size:19px!important;font-weight:750!important;line-height:1.4!important}
    .matrix-grid p{font-size:13px!important;line-height:1.8!important}

    .archive-grid{margin-top:40px!important}
    .archive-card{min-height:285px!important;padding:28px!important}
    .archive-card h3{margin:28px 0 12px!important;font-size:var(--ui-h3)!important;font-weight:750!important;line-height:1.45!important;letter-spacing:-.028em!important}
    .archive-card p{font-size:13px!important;line-height:1.82!important}

    .researcher-grid{grid-template-columns:390px minmax(0,1fr)!important;gap:64px!important}
    .researcher-name{font-size:20px!important;font-weight:750!important;line-height:1.4!important}
    .researcher-lead{font-size:14px!important;line-height:1.9!important}
    .profile-list article{grid-template-columns:105px 1fr!important;gap:20px!important;padding:16px 0!important}
    .profile-list strong{font-size:14px!important;font-weight:750!important}
    .profile-list span{font-size:13px!important;line-height:1.75!important}

    @media(max-width:1080px){
      .project-grid{grid-template-columns:1fr 1fr!important}
      .project-card.featured{grid-column:1/-1!important}
      .method-grid{grid-template-columns:1fr 1fr!important}
      .researcher-grid{grid-template-columns:340px minmax(0,1fr)!important;gap:42px!important}
    }
    @media(max-width:980px){
      .hero-grid,.split-heading,.standards-grid,.researcher-grid{grid-template-columns:1fr!important}
      .hero-panel{max-width:620px!important}
      .about-grid,.matrix-grid{grid-template-columns:1fr 1fr!important}
    }
    @media(max-width:680px){
      .wrap,.header-inner{width:min(100% - 32px,var(--ui-max))!important}
      .section{padding:68px 0!important}
      .hero{padding-top:122px!important}
      .hero h1{font-size:clamp(38px,11vw,48px)!important}
      .hero-grid{gap:34px!important}
      .split-heading,.standards-grid{gap:28px!important}
      .about-grid,.project-grid,.method-grid,.matrix-grid,.archive-grid{grid-template-columns:1fr!important}
      .research-axis{min-height:0!important}
      .project-card,.archive-card{min-height:0!important}
      .researcher-visual{max-width:100%!important}
      .section-head{display:block!important}
      .section-head>p{margin-top:14px!important}
      .principle-line{grid-template-columns:1fr 1fr!important}
    }
  `;
  document.head.appendChild(style);

  const stripTrailingPeriod = (element) => {
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    let lastTextNode = null;
    while (walker.nextNode()) {
      if (walker.currentNode.nodeValue.trim()) lastTextNode = walker.currentNode;
    }
    if (lastTextNode) {
      lastTextNode.nodeValue = lastTextNode.nodeValue.replace(/[.。．]+(\s*)$/, '$1');
    }
  };

  document.querySelectorAll('h1,h2,h3,.hero-panel strong').forEach(stripTrailingPeriod);
})();

(() => {
  const footer = document.querySelector('body > footer');
  if (!footer) return;
  if (!document.getElementById('top')) document.body.id = 'top';
  const style = document.createElement('style');
  style.id = 'copyright-standard-style';
  style.textContent = `
    body > footer.copyright-standard{font-family:Pretendard,"Noto Sans KR","Apple SD Gothic Neo",system-ui,-apple-system,sans-serif!important;background:#06111d!important;color:#8fa1b3!important;border-top:1px solid rgba(255,255,255,.10)!important;padding:32px 0!important;font-size:12px!important;line-height:1.7!important;letter-spacing:0!important;text-align:left!important}
    .copyright-standard-inner{width:min(1180px,calc(100% - 48px));margin:0 auto;display:flex;justify-content:space-between;align-items:flex-start;gap:28px;min-height:0!important}
    .copyright-standard-brand strong{display:block;font-family:inherit!important;font-size:13px!important;font-weight:600!important;line-height:1.5!important;letter-spacing:0!important;color:#d7e1ea!important}
    .copyright-standard-brand p,.copyright-standard-meta p{margin:4px 0 0!important;font-family:inherit!important;font-size:12px!important;font-weight:400!important;line-height:1.7!important;letter-spacing:0!important;color:#8fa1b3!important}
    .copyright-standard-brand p{font-size:11px!important}
    .copyright-standard-meta{text-align:right!important}
    .copyright-standard a{font-family:inherit!important;color:#a9bfd2!important;text-decoration:none!important}
    .copyright-standard-top{display:inline-block;margin-top:7px!important;font-size:11px!important;font-weight:600!important;line-height:1.7!important;letter-spacing:0!important}
    @media(max-width:680px){.copyright-standard-inner{width:min(100% - 32px,1180px);display:block}.copyright-standard-meta{text-align:left!important;margin-top:18px;padding-top:16px;border-top:1px solid rgba(255,255,255,.08)}}
  `;
  document.head.appendChild(style);
  footer.className = 'site-footer copyright-standard';
  footer.innerHTML = `<div class="copyright-standard-inner"><div class="copyright-standard-brand"><strong>AI 법률연구소</strong><p>AI Law Research Institute</p></div><div class="copyright-standard-meta"><p>Copyright © 이명훈 2026. All rights reserved.</p><p>문의 <a href="mailto:kimbrighth@gmail.com">kimbrighth@gmail.com</a></p><a class="copyright-standard-top" href="#top">맨 위로 이동 ↑</a></div></div>`;
})();
