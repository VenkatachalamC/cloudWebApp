const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('ul');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('slide');
});

const homeClick = document.querySelector('#homeClick');
const loginClick = document.querySelector('#loginClick');
const overviewClick = document.querySelector('#overviewClick');
const docsClick = document.querySelector('#docsClick');
const contClick = document.querySelector('#contClick');

homeClick.addEventListener('click', () => {
    navbar.classList.remove('slide');
});

loginClick.addEventListener('click', () => {
    navbar.classList.remove('slide');
});
overviewClick.addEventListener('click', () => {
    navbar.classList.remove('slide');
});
docsClick.addEventListener('click', () => {
    navbar.classList.remove('slide');
});
contClick.addEventListener('click', () => {
    navbar.classList.remove('slide');
});