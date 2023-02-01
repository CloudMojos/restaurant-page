import './styles.css';
import nav from './nav';
import home from './home';
import menu from './menu';

const content = document.querySelector('#content');

content.appendChild(nav);
content.appendChild(home);
content.appendChild(menu);

let tabs = document.querySelectorAll('.links > *');
console.log(tabs);
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) { return; }
        else {
            // remove the classlist from the others
            tabs.forEach(tab => {
                if (tab.classList.contains('active')) {
                    tab.classList.remove('active');
                }
            })
            // , add the classlist here.
            tab.classList.add('active');
        }
    })
})
