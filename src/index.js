import './styles.css';
import nav from './nav';
import home from './home';
import menu from './menu';

const content = document.querySelector('#content');

content.appendChild(nav);
content.appendChild(home);
content.appendChild(menu);

function changeTab() {
    let tabs = document.querySelectorAll('.links > *');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            if (e.target.classList.contains('active')) { return; }
            else {
                // remove the classlist from the others
                tabs.forEach(tab => {
                    if (tab.classList.contains('active')) {
                        tab.classList.remove('active');
                        const container = document.getElementById(tab.dataset.link);
                        container.classList.remove('active');
                    }
                })
                // , add the classlist here.
                tab.classList.add('active');
                document.getElementById(tab.dataset.link).classList.add('active'); 
            }
        })
    })
};

changeTab()
