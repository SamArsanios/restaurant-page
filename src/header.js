const content = document.querySelector('#content');

const header = () => {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    nav.classList.add('fixed', 'topnav');
    const restaurant = document.createElement('h1');
    restaurant.textContent = 'Arsan\'s Diner';
    restaurant.classList.add('arsani');

    nav.appendChild(restaurant);
    header.appendChild(nav);
    content.appendChild(header);
};

export default header;

// .center {
//     text-align: center;
//     padding-top: 20px;
//     padding-bottom: 20px;
// }