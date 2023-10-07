const boilerPlate= () =>{
   


    const header = document.createElement('div');
    header.className = 'header';

    const headerContent = document.createElement('header');
    headerContent.id = 'header';

    const headerLogo = document.createElement('img');
    headerLogo.className = 'headerLogo';
    headerLogo.src = '/src/logo (1).png';
    headerLogo.alt = 'logo';

    const headerButtons = document.createElement('div');
    headerButtons.className = 'headerButtons';

    const ul = document.createElement('ul');

    const orderNow = document.createElement('li');
    orderNow.id = 'orderNowB';
    orderNow.textContent = 'Order now';

    const locations = document.createElement('li');
    locations.id = 'menuB';
    locations.textContent = 'Menu';

    const faq = document.createElement('li');
    faq.id = 'faqB';
    faq.textContent = 'FAQ';

    const login = document.createElement('a');
    login.className = 'login';
    login.textContent = 'Login';

    const loginIcon = document.createElement('img');
    loginIcon.src = '/src/icons8-login-48.png';
    loginIcon.alt = 'login';

    const bodyContent = document.createElement('div');
    bodyContent.className = 'bodyContent';
    bodyContent.id = 'bodyContent';

    const footer = document.createElement('div');
    footer.className = 'footer';

    const footerLogo = document.createElement('img');
    footerLogo.className = 'footerLogo';
    footerLogo.src = '/src/logo (1).png';
    footerLogo.alt = 'logo';

    const ulFooter = document.createElement('ul');

    const socialMedia1 = document.createElement('li');
    socialMedia1.textContent = 'Instagram';

    const socialMedia2 = document.createElement('li');
    socialMedia2.textContent = 'Twitter';

    const socialMedia3 = document.createElement('li');
    socialMedia3.textContent = 'Facebook';

    var contentElement = document.getElementById('content');

    // Agregar elementos al documento
    contentElement.appendChild(header);

    // Agrega los demás elementos como hijos de "content" o de otros elementos según corresponda
    contentElement.appendChild(bodyContent);
    contentElement.appendChild(footer);


    header.appendChild(headerContent);
    headerContent.appendChild(headerLogo);
    header.appendChild(headerButtons);
    headerButtons.appendChild(ul);
    ul.appendChild(orderNow);
    ul.appendChild(locations);
    ul.appendChild(faq);
    header.appendChild(login);
    login.appendChild(loginIcon);

    footer.appendChild(footerLogo);
    footer.appendChild(ulFooter);
    ulFooter.appendChild(socialMedia1);
    ulFooter.appendChild(socialMedia2);
    ulFooter.appendChild(socialMedia3);

}

export {boilerPlate};