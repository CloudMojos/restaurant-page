class TabContainer {
    constructor(name, active = false) {
        this.name = name;
        this.active = active;

        this.structure = document.createElement('div');
        this.structure.classList.add('tab-container');
        this.structure.classList.add(name);
        if (this.active === true) { this.structure.classList.add('active'); }

        this.section = document.createElement('section');
        this.structure.appendChild(this.section);
    }

    set header(text) {
        this.h1 = document.createElement('h1');
        this.h1.className = 'section-header';
        this.h1.textContent = text;
        this.structure.appendChild(this.h1);
        
    }

    addSection(img_url, text, alignment) {
        // Challenge: Take the first word in the text, make it a span element with class first-word
        let div = document.createElement('div');
        div.className = `section-content ${alignment}`;

        let img = document.createElement('img');
        img.setAttribute('src', img_url);
        div.appendChild(img);

        let p = document.createElement('p');
        let firstWord = document.createElement('span');
        text = text.split(' ');
        firstWord.textContent = text.splice(0, 1);
        firstWord.className = 'first-word';
        text = text.join(' ');
        
        p.appendChild(firstWord);
        p.appendChild(document.createTextNode(text));
        div.appendChild(p);

        this.structure.appendChild(div);
    }
} 


{/* <section>
<div class="section-content left">
    <img src="src/img/DSC_0319.jpg">
    <p>
        <span class="first-word">Enjoy</span>
        our premium unli-wings for only $20.99 per hour. Or subscribe to our membership program where you can charge up to 10,000 hours!
    </p>
</div>
<div class="section-content right">
    <p>
        <span class="first-word">Upgrade</span>
       your wing-eating experience by subscribing to our membership program and receive exclusive perks such as vouchers, freebies, and monthly gifts.
    </p>
    <img src="src/img/DSC_0319.jpg">
</div>
</section> */}

const Home = new TabContainer('Home');
Home.header = "Yani please don't break me.";
Home.addSection('img/DSC_0319.jpg', "Enjoy our premium unli-wings for only $20.99 per hour. Or subscribe to our membership program where you can charge up to 10,000 hours!", "left");
Home.addSection('img/DSC_0319.jpg', "Upgrade your wing-eating experience by subscribing to our membership program and receive exclusive perks such as vouchers, freebies, and monthly gifts.", "right");
console.log(Home.h1.className);