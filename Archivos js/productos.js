function showProductDetails(productId) {
    const details = document.getElementById(productId);
    details.style.display = 'block';
}

function addToCart(productId) {
    const cart = document.getElementById('cart-items');
    const product = document.getElementById(productId);

    // Clona el producto y agrega al carrito
    const clonedProduct = product.cloneNode(true);
    cart.appendChild(clonedProduct);
}
