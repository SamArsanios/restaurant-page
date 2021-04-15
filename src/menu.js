const menu = () => {
  const DISH = [
    {
      image: 'https://cdn.pixabay.com/photo/2017/03/23/20/04/cuban-2169317_960_720.jpg',
      dish_name: 'Cuban Eggs',
      dish_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, suscipit.',
      price: '$10',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg',
      dish_name: 'Asparagus Steak',
      dish_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, suscipit?',
      price: '$20',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/04/04/17/22/meal-1307604_960_720.jpg',
      dish_name: 'Special Greenies',
      dish_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, suscipit?',
      price: '$3',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2017/03/07/04/40/swede-cakes-2123191_960_720.jpg',
      dish_name: 'Swede Cakes',
      dish_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, suscipit?',
      price: '$22',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2018/04/13/17/12/vegetable-skewer-3317055_960_720.jpg',
      dish_name: 'Vegetable-Skewer',
      dish_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, suscipit.',
      price: '$6',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/02/19/11/30/shrimp-1209744_960_720.jpg',
      dish_name: 'Shrimp Rice',
      dish_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, suscipit.',
      price: '$16',
    },
  ];

  const container = document.createElement('div');
  container.classList.add('container-fluid');

  const divContentMenu = document.createElement('div');
  divContentMenu.classList.add('d-flex', 'flex-wrap');
  container.appendChild(divContentMenu);

  DISH.forEach((dishes) => {
    const dishContainer = document.createElement('div');
    dishContainer.classList.add('p-2', 'col-md-6', 'bd-highlight', 'text-center');
    divContentMenu.appendChild(dishContainer);

    const card = document.createElement('div');
    card.classList.add('card', 'text-black', 'bg-light', 'mb-3');
    dishContainer.appendChild(card);

    const row = document.createElement('div');
    row.classList.add('row', 'no-gutters');
    card.appendChild(row);

    const divImage = document.createElement('div');
    divImage.classList.add('col-md-4');
    row.append(divImage);

    const imgCard = document.createElement('img');
    imgCard.classList.add('card-img');
    imgCard.setAttribute('src', dishes.image);
    divImage.appendChild(imgCard);

    const divBody = document.createElement('div');
    divBody.classList.add('col-md-8');
    row.appendChild(divBody);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    divBody.appendChild(cardBody);

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.innerHTML = dishes.dish_name;
    cardBody.appendChild(cardTitle);

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.innerHTML = dishes.dish_content;
    cardBody.appendChild(cardText);

    const cardPrice = document.createElement('p');
    cardPrice.classList.add('card-text');
    cardBody.appendChild(cardPrice);

    const price = document.createElement('small');
    price.classList.add('text-muted');
    price.innerHTML = dishes.price;
    cardPrice.appendChild(price);
  });
  const startDiv = document.getElementById('content');
  startDiv.appendChild(container);
};

export default menu;