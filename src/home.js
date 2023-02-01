import { TabContainer } from './tab-container.js';

const Home = new TabContainer('Home');
Home.header = "Yani please don't break me.";
Home.addSection("left", 'img/DSC_0319.jpg', "Enjoy our premium unli-wings for only $20.99 per hour. Or subscribe to our membership program where you can charge up to 10,000 hours!");
Home.addSection("right", 'img/DSC_0319.jpg', "Upgrade your wing-eating experience by subscribing to our membership program and receive exclusive perks such as vouchers, freebies, and monthly gifts.");

export default Home;