// Assuming the product data is available and included from another script or source
const cart = [];

// Function to add an item to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId); // Assuming 'products' is defined elsewhere
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartDisplay();
}

// Function to remove an item from the cart
function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
    }
    updateCartDisplay();
}

// Function to update cart display
function updateCartDisplay() {
    const cartContainer = document.getElementById('cartItems');
    cartContainer.innerHTML = ''; // Clear the cart display

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <h4>${item.name}</h4>
            <p>Price: $${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
            <p>Total: $${item.price * item.quantity}</p>
            <button onclick="removeFromCart('${item.id}')">Remove</button>
        `;
        cartContainer.appendChild(itemElement);
    });

    displayTotal();
}

// Function to display the total cost of the cart
function displayTotal() {
    const total = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    const totalContainer = document.getElementById('total');
    if (!totalContainer) {
        const totalDiv = document.createElement('div');
        totalDiv.id = 'total';
        document.body.appendChild(totalDiv);
    }
    document.getElementById('total').textContent = `Total Cost: $${total}`;
}

// Example of initializing the cart display (if there are already items in the cart)
document.addEventListener('DOMContentLoaded', updateCartDisplay);
