import home from './home';

const content = document.querySelector('#content');

const homeTab = document.querySelector('.home-tab');
const menuTab = document.querySelector('.menu-tab');
const contactTab = document.querySelector('.contact-tab');

const tabs = [homeTab, menuTab, contactTab];

home(content);

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        content.innerHTML = '';
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tab.classList.toggle('active');
    });
});

homeTab.addEventListener('click', () => {
    home(content);
});