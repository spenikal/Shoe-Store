let cart = JSON.parse(localStorage.getItem('cart')) || [];
const products = JSON.parse(localStorage.getItem('products')) || [
    { id: '001', name: 'Nike Air Max', price: 120 },
    { id: '002', name: 'Adidas UltraBoost', price: 180 },
    { id: '003', name: 'Puma Running Shoes', price: 100 },
    { id: '004', name: 'Reebok Classic', price: 90 }
];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function updateQuantity(productId, newQuantity) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem && newQuantity >= 1) {
        cartItem.quantity = newQuantity;
    } else {
        removeFromCart(productId);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartContainer = document.getElementById('cartItems');
    cartContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        document.getElementById('emptyMessage').style.display = 'block';
        document.getElementById('checkoutButton').disabled = true;
    } else {
        document.getElementById('emptyMessage').style.display = 'none';
        document.getElementById('checkoutButton').disabled = false;

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'list-group-item cart-box';
            itemElement.innerHTML = `
                <div class="cart-item">
                    <div class="cart-item-details">
                        <h4>${item.name} - $${item.price.toFixed(2)}</h4>
                        <div class="cart-item-actions">
                            <button onclick="updateQuantity('${item.id}', ${item.quantity - 1})" class="btn btn-secondary">-</button>
                            <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity('${item.id}', parseInt(this.value))">
                            <button onclick="updateQuantity('${item.id}', ${item.quantity + 1})" class="btn btn-secondary">+</button>
                            <button onclick="removeFromCart('${item.id}')" class="btn btn-danger">Remove</button>
                        </div>
                    </div>
                </div>
            `;
            cartContainer.appendChild(itemElement);
            total += item.price * item.quantity;
        });
    }

    document.getElementById('totalPrice').textContent = `$${total.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', updateCartDisplay);

function proceedToCheckout() {
    window.location.href = 'checkout.html';
}
