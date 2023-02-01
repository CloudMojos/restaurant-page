import './styles.css';
import nav from './nav';
import home from './home'

// - Run webpack server
// - Use import export
//   > for handling tab  navigation
//   

// 

const content = document.querySelector('#content');

content.appendChild(nav());
content.appendChild(home);

console.log(content);
