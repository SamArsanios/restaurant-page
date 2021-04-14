const contact = () => {
    const container = document.createElement('div');
    container.classList.add('container-fluid');

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('row', 'container', 'justify-content-center', 'align-items-center', 'text-black-50');

    const formTag = document.createElement('form');
    formTag.classList.add('col-6');
    contactDiv.appendChild(formTag);

    const firstDiv = document.createElement('div');
    firstDiv.classList.add('form-row');
    formTag.appendChild(firstDiv);

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('form-group', 'col-md-6');
    firstDiv.appendChild(nameDiv);
    const nameLabel = document.createElement('label');
    nameLabel.innerHTML = 'Name';
    nameDiv.append(nameLabel);

    const nameInput = document.createElement('input');
    nameInput.classList.add('form-control');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Name');
    nameDiv.appendChild(nameInput);

    const emailDiv = document.createElement('div');
    emailDiv.classList.add('form-group', 'col-md-6');
    firstDiv.appendChild(emailDiv);
    const emailLabel = document.createElement('label');
    emailLabel.innerHTML = 'Email';
    emailDiv.append(emailLabel);
    const emailInput = document.createElement('input');
    emailInput.classList.add('form-control');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('placeholder', 'email');
    emailDiv.appendChild(emailInput);

    const secondDiv = document.createElement('div');
    secondDiv.classList.add('form-row');
    formTag.appendChild(secondDiv);

    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('form-group', 'col-md-6');
    secondDiv.appendChild(phoneDiv);
    const phoneLabel = document.createElement('label');
    phoneLabel.innerHTML = 'Your Phone Number';
    phoneDiv.append(phoneLabel);
    const phoneInput = document.createElement('input');
    phoneInput.classList.add('form-control');
    phoneInput.setAttribute('type', 'tel');
    phoneInput.setAttribute('placeholder', '(999) 999-9999');
    phoneDiv.appendChild(phoneInput);

    const msgDiv = document.createElement('div');
    formTag.appendChild(msgDiv);
    const msgLabel = document.createElement('label');
    msgLabel.innerHTML = 'Message';
    msgDiv.appendChild(msgLabel);

    const inputMsg = document.createElement('input');
    inputMsg.classList.add('form-control');
    inputMsg.setAttribute('type', 'text');
    inputMsg.setAttribute('placeholder', 'Type your message');
    msgDiv.appendChild(inputMsg);

    const checkMe = document.createElement('div');
    checkMe.classList.add('form-group');
    formTag.appendChild(checkMe);
    const formCheck = document.createElement('div');
    formCheck.classList.add('form-check');
    checkMe.appendChild(formCheck);
    const inputCkeck = document.createElement('input');
    inputCkeck.classList.add('form-check-input');
    inputCkeck.setAttribute('type', 'checkbox');
    formCheck.appendChild(inputCkeck);
    const checkLabel = document.createElement('label');
    checkLabel.classList.add('form-check-label');
    checkLabel.innerHTML = 'Check Me';
    formCheck.appendChild(checkLabel);

    const btnSubmit = document.createElement('button');
    btnSubmit.classList.add('btn', 'btn-primary');
    btnSubmit.innerHTML = 'Submit';
    formTag.appendChild(btnSubmit);

    const startDiv = document.getElementById('content');
    startDiv.appendChild(container);
    container.appendChild(contactDiv);
};

export default contact;