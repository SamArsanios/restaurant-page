const home = (content) => {
    const home = document.createElement('div');
    home.setAttribute('id', 'home');
    const header = document.createElement('h1');
    header.textContent = 'Habesha Restaurant';

    const info = document.createElement('p');
    info.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus voluptas modi corrupti deserunt quisquam vitae eos facilis perferendis sequi saepe.Totam nemo vitae et commodi recusandae officiis fugit labore error quidem, praesentium adipisci explicabo veniam non sed, aspernatur fuga eius reiciendis inventore vel minus quis quibusdam architecto! Ducimus, amet ut!';
    home.appendChild(header);
    home.appendChild(info);
    content.appendChild(home);
};

export default home;
