document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        const cardId = this.getAttribute('data-card');
        const overlayBody = document.getElementById('overlay-body');
        const imgSrc = this.querySelector('.card-img-top').src; // Get the image source
        let contentHtml = '';

        // Determine the content based on the clicked card
        switch (cardId) {
            case '1':
                contentHtml = `<div class="overlay-content-wrapper"><img src="${imgSrc}" class="overlay-img"><div><h2>Pasta Primavera</h2><p>Enjoy a vibrant selection of fresh vegetables like bell peppers, zucchini, and carrots, sautéed and served over perfectly cooked pasta. Drizzled with a garlic-infused olive oil sauce, this dish is a celebration of flavors.</p><p><strong>Price: $18</strong></p></div></div>`;
                break;
            case '2':
                contentHtml = `<div class="overlay-content-wrapper"><img src="${imgSrc}" class="overlay-img"><div><h2>Seared Salmon Fillet</h2><p>This dish features a beautifully seared salmon fillet that's crispy on the outside and tender on the inside. Accompanied by fresh asparagus and a rich, creamy dill sauce, it's a favorite among our guests.</p><p><strong>Price: $22</strong></p></div></div>`;
                break;
            case '3':
                contentHtml = `<div class="overlay-content-wrapper"><img src="${imgSrc}" class="overlay-img"><div><h2>Classic Tiramisu</h2><p>Indulge in our classic tiramisu, a luxurious dessert made with mascarpone cheese, delicate espresso-soaked ladyfingers, and dusted with cocoa powder. It's the perfect end to any meal.</p><p><strong>Price: $10</strong></p></div></div>`;
                break;
        }

        overlayBody.innerHTML = contentHtml;
        document.querySelector('.overlay').style.display = 'flex';
        setTimeout(() => document.querySelector('.overlay').style.opacity = '1', 10); // Smooth transition
    });
});

document.querySelector('.close-btn').addEventListener('click', function() {
    const overlay = document.querySelector('.overlay');
    overlay.style.opacity = '0';
    setTimeout(() => overlay.style.display = 'none', 400); // Match the transition duration
});
