document.addEventListener('DOMContentLoaded', loadProducts);

function loadProducts() {
    const products = [
        {
            id: "001",
            name: "Nike Air Max",
            price: 120,
            description: "Comfortable and stylish. Perfect for everyday wear.",
            sizes: [7, 8, 9, 10, 11],
            inStock: true,
            imageUrl: "C:/Users/saich/Documents/DIS/Assignment_LookAndFeel/img/nike.jpeg" // Ensure the image is in the correct directory
        },
        {
            id: "002",
            name: "Adidas UltraBoost",
            price: 180,
            description: "High performance running shoe. Boost your performance.",
            sizes: [6, 7, 8, 9, 10],
            inStock: false,
            imageUrl: "C:/Users/saich/Documents/DIS/Assignment_LookAndFeel/img/addidas.jpg" // Ensure the image is in the correct directory
        },
        {
            id: "003",
            name: "Puma Running Shoes",
            price: 100,
            description: "Lightweight and comfortable. Great for long runs.",
            sizes: [6, 7, 8, 9, 10],
            inStock: true,
            imageUrl: "C:/Users/saich/Documents/DIS/Assignment_LookAndFeel/img/puma.webp" // Ensure the image is in the correct directory
        },
        {
            id: "004",
            name: "Reebok Classic",
            price: 90,
            description: "Classic design with modern comfort. Ideal for casual wear.",
            sizes: [7, 8, 9, 10, 11],
            inStock: true,
            imageUrl: "C:/Users/saich/Documents/DIS/Assignment_LookAndFeel/img/reebok.jpeg" // Ensure the image is in the correct directory
        }
    ];

    displayProducts(products);
}

function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    products.forEach((product) => {
        const productElement = document.createElement('div');
        productElement.className = 'col-md-4 col-sm-6 mb-4';
        productElement.innerHTML = `
            <div class="card h-100">
                <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}" onclick="openProduct('${product.id}')">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price.toFixed(2)}</p>
                </div>
            </div>
        `;
        productContainer.appendChild(productElement);
    });
}

function openProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}
