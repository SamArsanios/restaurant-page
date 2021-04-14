import home from './home';
import menu from './menu';
import contact from './contact';
import header from './header';
import bgImg from './background-1.jpg';

const content = document.querySelector('#content');
// const headers = document.querySelector('#header');

const homeTab = document.querySelector('.home-tab');
const menuTab = document.querySelector('.menu-tab');
const contactTab = document.querySelector('.contact-tab');

const tabs = [homeTab, menuTab, contactTab];

header();
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

menuTab.addEventListener('click', () => {
    menu(content);
});

contactTab.addEventListener('click', () => {
    contact(content);
});

const main = () => {
    // const main = document.createElement('main');
    const bg = document.querySelector('body');
    bg.classList.add('bg-img', 'fixed');
    bg.style.background = `url(${bgImg})`;
    bg.style.backgroundRepeat = 'no-repeat';
    bg.style.backgroundSize = 'cover';

    // main.appendChild(bg);
    // main.appendChild(wrapper);
    // content.appendChild(main);
}

// main();