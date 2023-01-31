function createHome() {
    // Create the elements
    const homeDiv = document.createElement('div');
    homeDiv.className = 'home tab-container active';

    const h1 = document.createElement('h1');
    h1.classList.add('section-header');

    const section = document.createElement('section');

    const sectionContents = [];
    sectionContents.push(sectionContent('left'), )

}


<div class="home tab-container active">
    <h1 class="section-header">Unleash your wing cravings and beer thirst at Wingtopia!</h1>
    <section>
        <div class="section-content left">
            <img src="src/img/DSC_0319.jpg">
            <p>
                <span class="first-word">Enjoy</span>
                our premium unli-wings for only <span style="font-weight: bold;">*$20.99*</span> per hour. Or subscribe to our membership program where you can charge up to 10,000 hours!
            </p>
        </div>
        <div class="section-content right">
            <p>
                <span class="first-word">Upgrade</span>
            your wing-eating experience by subscribing to our membership program and receive exclusive perks such as vouchers, freebies, and monthly gifts.
            </p>
            <img src="src/img/DSC_0319.jpg">
        </div>
    </section>
</div>