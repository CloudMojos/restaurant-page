export class TabContainer {
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

    addSection(alignment, img_url, text) {
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