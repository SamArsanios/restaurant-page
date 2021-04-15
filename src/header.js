const header = () => {
  const content = document.querySelector('#header');
  const nav = document.createElement('div');

  nav.classList.add('fixed', 'topnav');
  const restaurant = document.createElement('h1');
  restaurant.textContent = 'Arsani\'s Diner';
  restaurant.classList.add('arsani');

  content.appendChild(nav);
  nav.appendChild(restaurant);
};

export default header;
