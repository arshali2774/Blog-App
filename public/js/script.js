document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.querySelector('.header__button-search');
  const searchBar = document.querySelector('.searchBar');
  const searchInput = document.querySelector('#searchInput');
  const searchClose = document.querySelector('#searchClose');
  const searchForm = document.querySelector('.search__form');
  searchBtn.addEventListener('click', (e) => {
    searchBar.style.visibility = 'visible';
    searchBar.classList.add('open');
    searchBtn.setAttribute('aria-expanded', 'true');
    searchInput.focus();
  });

  searchClose.addEventListener('click', (e) => {
    searchBar.style.visibility = 'hidden';
    searchBar.classList.remove('open');
    searchBtn.setAttribute('aria-expanded', 'false');
  });
});
