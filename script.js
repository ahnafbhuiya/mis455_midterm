// Ahnaf Bhuiya - 2230282
// Navigation Handler
function navigateToProducts() {
    window.location.href = 'products.html';
}

// Cart Functionality
let cartItems = [];

function addToCart(productId) {
    cartItems.push(productId);
    alert(`Added ${productId} to cart!`);
    console.log('Current Cart:', cartItems);
}

// Contact Form Handler
function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if(name && email && message) {
        alert('Message sent successfully! We will respond shortly.');
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
}