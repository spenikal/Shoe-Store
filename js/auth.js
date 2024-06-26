function registerUser(event) {
    event.preventDefault();

    const name = document.getElementById('registerName').value;
    const mobile = document.getElementById('registerMobile').value;
    const email = document.getElementById('registerEmail').value;
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.find(user => user.username === username)) {
        alert('Username already exists. Please choose a different username.');
        return;
    }

    users.push({ name, mobile, email, username, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful. You can now log in.');
    window.location.href = 'login.html';
}

function loginUser(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful.');
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

function logoutUser() {
    localStorage.removeItem('loggedInUser');
    alert('You have been logged out.');
    window.location.href = 'login.html';
}
