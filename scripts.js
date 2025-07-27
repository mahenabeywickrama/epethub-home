const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const icon = hamburger.querySelector('i');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');

    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});