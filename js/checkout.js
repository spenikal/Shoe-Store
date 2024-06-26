function submitCheckout(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const cardExpiry = document.getElementById('cardExpiry').value;
    const cardCVC = document.getElementById('cardCVC').value;

    const orderDetails = {
        name,
        address,
        city,
        state,
        zip,
        cardNumber,
        cardExpiry,
        cardCVC,
        cart: JSON.parse(localStorage.getItem('cart'))
    };

    // Mock payment processing
    console.log('Processing payment...', orderDetails);
    alert('Payment successful! Your order has been placed.');

    // Clear cart after successful payment
    localStorage.removeItem('cart');
    window.location.href = 'index.html';
}
