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

function loadMore() {
    displayedItems += 2;
    displaySearchResults(items); 
}

var loadMoreButton = document.getElementById('load-more');
if (loadMoreButton) {
    loadMoreButton.addEventListener('click', loadMore);
}

function showComingSoon() {
    var bagIcon = document.querySelector('.icon');
    bagIcon.src = 'images/coming_soon_image.jpg';
    bagIcon.alt = 'Coming Soon';
}

