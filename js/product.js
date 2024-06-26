document.addEventListener('DOMContentLoaded', () => {
    // Initialize products in local storage if not already set
    if (!localStorage.getItem('products')) {
        const products = [
            {
                id: 'nike-air-max',
                name: 'Nike Air Max',
                imageUrl: 'file:///C:/Users/saich/Documents/DIS/Assignment_LookAndFeel/img/nike.jpeg',
                description: 'High quality Nike Air Max shoes for maximum comfort and style.',
                price: 120.00,
                sizes: ['8', '9', '10', '11'],
                inStock: true
            },
            {
                id: 'adidas-ultraboost',
                name: 'Adidas UltraBoost',
                imageUrl: 'img/addidas.jpg',
                description: 'Experience the ultimate comfort with Adidas UltraBoost shoes.',
                price: 180.00,
                sizes: ['8', '9', '10', '11'],
                inStock: true
            },
            {
                id: 'puma-running-shoes',
                name: 'Puma Running Shoes',
                imageUrl: 'img/puma.webp',
                description: 'Stay ahead of the competition with Puma Running Shoes.',
                price: 100.00,
                sizes: ['8', '9', '10', '11'],
                inStock: true
            },
            {
                id: 'reebok-classic',
                name: 'Reebok Classic',
                imageUrl: 'img/reebok.jpeg',
                description: 'Classic Reebok shoes for timeless style and comfort.',
                price: 90.00,
                sizes: ['8', '9', '10', '11'],
                inStock: true
            }
        ];
        localStorage.setItem('products', JSON.stringify(products));
    }

    loadProductDetails();
});

function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const products = JSON.parse(localStorage.getItem('products')) || [];

    const product = products.find(p => p.id === productId);

    if (product) {
        const productDetailsContainer = document.getElementById('product-details');
        productDetailsContainer.innerHTML = `
            <div class="col-md-6">
                <img src="${product.imageUrl}" class="img-fluid" alt="${product.name}">
            </div>
            <div class="col-md-6">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Price: $${product.price.toFixed(2)}</p>
                <div class="mb-3">
                    <label for="sizeSelect" class="form-label">Select Size:</label>
                    <select id="sizeSelect" class="form-select">
                        ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                    </select>
                </div>
                <p>Status: ${product.inStock ? 'In Stock' : 'Out of Stock'}</p>
                <button class="btn btn-primary" onclick="addToCart('${product.id}')">Add to Cart</button>
            </div>
        `;
    } else {
        const productDetailsContainer = document.getElementById('product-details');
        productDetailsContainer.innerHTML = `
            <div class="col-12">
                <p class="text-danger">Product not found.</p>
            </div>
        `;
    }
}

function addToCart(productId) {
    const sizeSelect = document.getElementById('sizeSelect');
    const selectedSize = sizeSelect ? sizeSelect.value : null;

    if (!selectedSize) {
        alert('Please select a size.');
        return;
    }

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const products = JSON.parse(localStorage.getItem('products')) || [];

    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId && item.size === selectedSize);

    if (product) {
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({ ...product, size: selectedSize, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} (Size: ${selectedSize}) has been added to your cart.`);
    } else {
        alert('Product not found.');
    }
}
