// Sample product data (could be extended with more details if needed)
const products = [
  { id: '001', name: 'Nike Air Max', price: 120, image: 'images/nike_air_max.jpg' },
  { id: '002', name: 'Adidas UltraBoost', price: 180, image: 'images/adidas_ultraboost.jpg' },
  { id: '003', name: 'Converse All Star', price: 70, image: 'images/converse_all_star.jpg' }
];

// Initialize or retrieve the cart from local storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Simulated user database (for demonstration purposes only)
const users = [{ email: "user@example.com", password: "password123" }];

// Event listener for DOMContentLoaded to initialize the product display
document.addEventListener('DOMContentLoaded', function() {
  loadProducts();
  updateCartDisplay();
});

// Function to dynamically load products onto the homepage
function loadProducts() {
  const productsContainer = document.getElementById('product-container');
  products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'col-md-4 mb-4';
      productDiv.innerHTML = `
          <div class="card h-100">
              <img src="${product.image}" class="card-img-top" alt="${product.name}">
              <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">$${product.price.toFixed(2)}</p>
                  <button onclick="addToCart('${product.id}')" class="btn btn-primary">Add to Cart</button>
              </div>
          </div>
      `;
      productsContainer.appendChild(productDiv);
  });
}

// Function to add products to the cart and update local storage
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existingProduct = cart.find(item => item.id === productId);
  if (existingProduct) {
      existingProduct.quantity += 1;
  } else {
      cart.push({ ...product, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay();
}

// Function to update the cart display on the page
function updateCartDisplay() {
  const cartContainer = document.getElementById('cartItems');
  cartContainer.innerHTML = '';
  cart.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.className = 'cart-item mb-3';
      itemElement.innerHTML = `
          <h4>${item.name}</h4>
          <p>$${(item.price * item.quantity).toFixed(2)}</p>
          <button onclick="removeFromCart('${item.id}')" class="btn btn-danger">Remove</button>
      `;
      cartContainer.appendChild(itemElement);
  });
}

// Function to handle user login
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
      alert("Login successful!");
      window.location.href = 'index.html'; // Redirect to homepage after successful login
  } else {
      alert("Invalid credentials!");
  }
}

// Function to handle new user registration
function register() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  users.push({ name, email, password }); // Adding user to the 'database'
  alert("Registration successful!");
  window.location.href = 'login.html'; // Redirect to login page after registration
}
