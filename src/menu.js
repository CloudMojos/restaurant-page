import { TabContainer } from './tab-container.js';
import chickenImg from './img/DSC_0319.jpg';

const Menu = new TabContainer('menu');
Menu.header = "What We Offer";
Menu.addSection("left", chickenImg, "Enjoy our premium unli-wings for only $20.99 per hour. Or subscribe to our membership program where you can charge up to 10,000 hours!");
Menu.addSection("right", chickenImg, "Upgrade your wing-eating experience by subscribing to our membership program and receive exclusive perks such as vouchers, freebies, and monthly gifts.");

export default Menu.structure;