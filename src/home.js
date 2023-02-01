import { TabContainer } from './tab-container.js';
import chickenImg from './img/DSC_0319.jpg';
import bundleImg from './img/bundle.png';

const Home = new TabContainer('home', true);
Home.header = "Unleash your wing cravings and beer thirst at Wingtopia!";
Home.addSection("left", chickenImg, "Enjoy our premium unli-wings for only $20.99 per hour. Or subscribe to our membership program where you can charge up to 10,000 hours!");
Home.addSection("right", bundleImg, "Upgrade your wing-eating experience by subscribing to our membership program and receive exclusive perks such as vouchers, freebies, and monthly gifts.");

export default Home.structure;