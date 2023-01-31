export default function createNav() {
    const header = document.createElement('header');
   
    const h1 = document.createElement('h1');
    h1.textContent = '🍗 Wingtopia 🍺';
    h1.className = 'logo';

    const ul = document.createElement('ul');
    ul.className = 'links';

    const liHome = document.createElement('li');
    liHome.className = 'clickable active';
    liHome.textContent = '🏠 Home';

    const liMenu = document.createElement('li');
    liMenu.className = 'clickable';
    liMenu.textContent = '📜 Menu';

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

{/* <header>
<h1 class="logo">🍗 Wingtopia 🍺</h1>
<ul class="links">
    <li class="clickable active">🏠 Home</li>
    <li class="clickable">📜 Menu</li>
    <li class="clickable">❓ About</li>
    <!-- <li class="clickable">🚪 Log in</li> -->
    <!-- <li class="clickable">🚧 Under development</li> -->
</ul>
</header> */}