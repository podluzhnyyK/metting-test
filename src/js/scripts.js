// header menu
const headerNav = document.querySelector('.header-nav');

document.querySelector('.btn--burger').addEventListener('click', () => {
    headerNav.classList.toggle('header-nav--active');
});
