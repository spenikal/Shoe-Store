document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: '001', name: 'Nike Air Max', price: 120, image: 'images/nike_air_max.jpg' },
        { id: '002', name: 'Adidas UltraBoost', price: 180, image: 'images/adidas_ultraboost.jpg' },
        { id: '003', name: 'Converse All Star', price: 70, image: 'images/converse_all_star.jpg' }
    ];

    const productsContainer = document.getElementById('product-container');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'col-md-4';
        productDiv.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price}</p>
                    <button onclick="addToCart('${product.id}')" class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        `;
        productsContainer.appendChild(productDiv);
    });
});
