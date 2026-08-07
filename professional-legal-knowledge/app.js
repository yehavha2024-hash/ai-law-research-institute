(() => {
  const items = Array.isArray(window.LEGAL_CONTENT) ? window.LEGAL_CONTENT : [];
  const cards = document.querySelector('#cards');
  const filters = document.querySelector('#filters');
  const search = document.querySelector('#search');
  const resultCount = document.querySelector('#result-count');
  const contentCount = document.querySelector('#content-count');
  const dialog = document.querySelector('#detail-dialog');
  const detail = document.querySelector('#detail-content');
  const closeButton = document.querySelector('.dialog-close');

  let activeCategory = '전체';
  let query = '';
  const categories = ['전체', ...new Set(items.map(item => item.category))];

  contentCount.textContent = items.length;

  const escapeHtml = (value = '') => String(value).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));

  function renderFilters() {
    filters.innerHTML = categories.map(category => `
      <button class="filter-btn ${category === activeCategory ? 'active' : ''}" type="button" data-category="${escapeHtml(category)}">${escapeHtml(category)}</button>
    `).join('');
    filters.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
      activeCategory = button.dataset.category;
      renderFilters();
      renderCards();
    }));
  }

  function filteredItems() {
    const normalized = query.trim().toLowerCase();
    return items.filter(item => {
      const categoryMatch = activeCategory === '전체' || item.category === activeCategory;
      const haystack = [item.title,item.category,item.summary,item.statute,item.rule,item.reasoning,...item.tags,...item.issues,...item.cases.flatMap(c => [c.name,c.facts,c.holding])].join(' ').toLowerCase();
      return categoryMatch && (!normalized || haystack.includes(normalized));
    });
  }

  function renderCards() {
    const visible = filteredItems();
    resultCount.textContent = visible.length;
    cards.innerHTML = visible.length ? visible.map(item => `
      <article class="card" tabindex="0" role="button" data-id="${escapeHtml(item.id)}" aria-label="${escapeHtml(item.title)} 상세보기">
        <div class="card-top"><span class="badge">${escapeHtml(item.category)}</span><span class="level">${escapeHtml(item.level)}</span></div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.summary)}</p>
        <div class="tags">${item.tags.slice(0,4).map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}</div>
        <div class="card-foot"><span>${escapeHtml(item.statute)}</span><span>검토 ${escapeHtml(item.reviewed)}</span></div>
      </article>
    `).join('') : '<p style="color:#b8c5d1">검색 조건에 맞는 연구 단위가 없습니다.</p>';

    cards.querySelectorAll('.card').forEach(card => {
      const open = () => openDetail(card.dataset.id);
      card.addEventListener('click', open);
      card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); }});
    });
  }

  function openDetail(id) {
    const item = items.find(entry => entry.id === id);
    if (!item) return;
    const cases = item.cases.length ? item.cases.map(c => `
      <div class="case-item">
        <strong>${escapeHtml(c.name)}</strong>
        <p><b>사실관계</b> · ${escapeHtml(c.facts)}</p>
        <p><b>핵심 판단</b> · ${escapeHtml(c.holding)}</p>
        <a class="source-link" href="${escapeHtml(c.url)}" target="_blank" rel="noopener noreferrer">공식 판례 확인 ↗</a>
      </div>
    `).join('') : '<p>이 연구 단위는 현재 조문·법리 중심으로 공개되어 있으며 판례 심층분석은 후속 업데이트에서 추가됩니다.</p>';

    const sources = item.sources.length ? item.sources.map(source => `<a class="source-link" href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.label)} ↗</a>`).join('<br>') : '<span>법적 추론 방법론 콘텐츠</span>';

    detail.innerHTML = `
      <article class="detail-inner">
        <div class="detail-meta"><span class="tag">${escapeHtml(item.category)}</span><span class="tag">${escapeHtml(item.level)}</span>${item.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}</div>
        <h2>${escapeHtml(item.title)}</h2>
        <p class="detail-summary">${escapeHtml(item.summary)}</p>
        <section class="detail-block"><h3>관련 규범</h3><p>${escapeHtml(item.statute)}</p></section>
        <section class="detail-block"><h3>핵심 법리</h3><p>${escapeHtml(item.rule)}</p></section>
        <section class="detail-block"><h3>쟁점 체크</h3><ul>${item.issues.map(issue => `<li>${escapeHtml(issue)}</li>`).join('')}</ul></section>
        <section class="detail-block"><h3>법적 추론 포인트</h3><p>${escapeHtml(item.reasoning)}</p></section>
        <section class="detail-block"><h3>판례 분석</h3>${cases}</section>
        <section class="detail-block"><h3>공식 출처</h3>${sources}</section>
        <p class="detail-review">최종 검토일 ${escapeHtml(item.reviewed)} · 실제 사건·시험·업무 적용 전 반드시 최신 법령과 판례를 공식 자료에서 다시 확인하십시오.</p>
      </article>
    `;
    dialog.showModal();
  }

  search.addEventListener('input', event => { query = event.target.value; renderCards(); });
  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

  renderFilters();
  renderCards();
})();
