const navBtn = document.querySelector('.nav__button_mobile');
const navMobile = document.querySelector('.nav__mobile');
const body = document.body;

//Клик по кнопке
navBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    toggleMobileNav();
});

//Клик за пределами навигации
window.addEventListener('click', function() {
    if (body.classList.contains('no-scroll')) {
        toggleMobileNav();
    }
});

//Остановка клика внутри открытой мобильной навигации
navMobile.addEventListener('click', function (event) {
    event.stopPropagation();
});

function toggleMobileNav() {
    navMobile.classList.toggle('nav__mobile_active');
    navBtn.classList.toggle('nav__button_close');
    body.classList.toggle('no-scroll');
}