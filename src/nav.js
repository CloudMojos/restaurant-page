function createNav() {
    const header = document.createElement('header');
   
    const h1 = document.createElement('h1');
    h1.textContent = '🍗 Wingtopia 🍺';
    h1.className = 'logo';

    const ul = document.createElement('ul');
    ul.className = 'links';

    const liHome = document.createElement('li');
    liHome.className = 'clickable active';
    liHome.textContent = '🏠 Home';
    liHome.id = 'home-link';

    const liMenu = document.createElement('li');
    liMenu.className = 'clickable';
    liMenu.textContent = '📜 Menu';
    liMenu.id = 'menu-link';

    const liAbout = document.createElement('li');
    liAbout.className = 'clickble';
    liAbout.textContent = '❓ About';

    ul.appendChild(liHome);
    ul.appendChild(liMenu);
    ul.appendChild(liAbout);

    header.appendChild(h1);
    header.appendChild(ul);

    return header;
}

const nav = createNav();
export default nav;