function addToCart() {
    console.log('Item added to cart');
}

function removeFromCart() {
    console.log('Item removed from cart');
}

var addToCartButtons = document.querySelectorAll('.add-to-cart-button');
addToCartButtons.forEach(function (button) {
    button.addEventListener('click', addToCart);
});

var removeFromCartButtons = document.querySelectorAll('.remove-from-cart-button');
removeFromCartButtons.forEach(function (button) {
    button.addEventListener('click', removeFromCart);
});

function showComingSoon() {
    var bagIcon = document.querySelector('.icon');
    bagIcon.alt = 'bag bar';

    var comingSoonImage = document.createElement('img');
    comingSoonImage.src = 'images/come.jpg';
    comingSoonImage.alt = 'Coming Soon';
    comingSoonImage.style.width = '50%';
    comingSoonImage.style.maxHeight = '400px';
    comingSoonImage.style.position = 'fixed';
    comingSoonImage.style.top = '50%';
    comingSoonImage.style.left = '50%';
    comingSoonImage.style.transform = 'translate(-50%, -50%)';
    comingSoonImage.style.zIndex = '1000';

    var existingComingSoonImage = document.querySelector('img[alt="Coming Soon"]');
    if (existingComingSoonImage) {
        existingComingSoonImage.remove();
    }

    document.body.appendChild(comingSoonImage);

    setTimeout(hideComingSoon, 3000);
}

function hideComingSoon() {
    var comingSoonImage = document.querySelector('img[alt="Coming Soon"]');
    if (comingSoonImage) {
        comingSoonImage.remove();
        var bagIcon = document.querySelector('.icon');
        bagIcon.src = 'images/Bag_alt_light.png';
        bagIcon.alt = 'bag bar';
    }
}

var buyNowButton = document.querySelector('.services_btn1 button');
buyNowButton.addEventListener('click', showComingSoon);

function redirectToSignup() {
    alert('signup or login');
    window.location.href = "signup.html";
}
