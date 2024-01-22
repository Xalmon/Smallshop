document.addEventListener('DOMContentLoaded', function () {
    const loadMoreBtn = document.getElementById('load-more-btn');
    const itemsPerPage = 5;

    let visibleItemCount = itemsPerPage;

    hideItems();

    loadMoreBtn.addEventListener('click', function () {
        visibleItemCount += itemsPerPage;
        hideItems();
    });

    function hideItems() {
        const newData = [
            { imageSrc: 'images/five.png', new: 'New Product 1', price: '#5000.00' },
            { imageSrc: 'images/four.png', new: 'New Product 2', price: '#6000.00' },
            { imageSrc: 'images/three.png', new: 'New Product 2', price: '#6000.00' },
            { imageSrc: 'images/women.png', new: 'New Product 2', price: '#6000.00' },
            { imageSrc: 'images/women2.png', new: 'New Product 2', price: '#6000.00' },
            { imageSrc: 'images/women3.png', new: 'New Product 2', price: '#6000.00' },
            { imageSrc: 'images/women4.png', new: 'New Product 2', price: '#6000.00' },
            { imageSrc: 'images/women5.png', new: 'New Product 2', price: '#6000.00' },
        ];
    
        const items = document.querySelectorAll('.collection-row, .collection-row2');
    
        items.forEach((item, index) => {
            if (index < visibleItemCount) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    
        loadMoreBtn.style.display = visibleItemCount < items.length ? 'block' : 'none';
    }    
});


let cartItems = [];

function addToCart() {
    cartItems.push({});
    var isSuccess = true;

    if (isSuccess) {
        var itemCount = cartItems.length;
        var message = `Successfully added ${itemCount} item${itemCount > 1 ? 's' : ''} to cart. Thanks for Smallshopping with us!`;
        alert(message);
        updateCartUI();
    } else {
        alert('Failed to add. Please try again.');
    }
}

function removeFromCart() {
    if (cartItems.length > 0) {
        cartItems.pop();
        var itemCount = cartItems.length;
        var message = `Successfully removed ${itemCount} item${itemCount > 1 ? 's' : ''} from cart.`;
        alert(message);
        updateCartUI();
    } else {
        alert('Cart is already empty.');
    }
}

function updateCartUI() {
    console.log("Clicked on image"); 

    var cartTotalElement = document.getElementById('cart-total');
    if (cartTotalElement) {
      cartTotalElement.textContent = `(${cartItems.length}) items in cart`;
      alert(`You have (${cartItems.length}) item(s) in your cart. Do you want to continue with the purchase?`);
    } else {
      console.error("Element with id 'cart-total' not found");
    }
  }

var addToCartButtons = document.querySelectorAll('.add-to-cart-button');
addToCartButtons.forEach(function (button) {
    button.addEventListener('click', addToCart);
});

var removeFromCartButtons = document.querySelectorAll('.remove-from-cart-button');
removeFromCartButtons.forEach(function (button) {
    button.addEventListener('click', removeFromCart);
});

function Search() {
    var searchContainer = document.getElementById('search-container');
    searchContainer.style.display = (searchContainer.style.display === 'block') ? 'none' : 'block';

    var searchInput = document.getElementById('search-input').value.toLowerCase();
    var collectionImages = document.querySelectorAll('.collection-row-first-image img');

    collectionImages.forEach(function (image) {
        var altText = image.alt.toLowerCase();
        var parentItem = image.parentElement;

        if (altText.includes(searchInput)) {
            parentItem.style.display = 'block';
        } else {
            parentItem.style.display = 'none';
        }
    });
}

function Payment() {
    alert('Welcome');
    window.location.href = "EandPay.html";
}


function logout() {
    alert('Logging Out, GoodBye!')
    window.location.href = "home.html";
}


