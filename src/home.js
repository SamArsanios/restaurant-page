const home = (content) => {
    const home = document.createElement('div');
    home.setAttribute('id', 'home');
    const header = document.createElement('h1');
    header.textContent = 'Habesha Restaurant';

    const info = document.createElement('p');
    info.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed accusantium possimus iste aperiam deserunt ut maxime nisi, molestiae natus provident quisquam fugiat quaerat repudiandae facere nesciunt repellat magnam placeat sunt.';
    home.appendChild(header);
    home.appendChild(info);
    content.appendChild(home);
};

export default home;
