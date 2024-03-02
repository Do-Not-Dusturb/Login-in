// add your login code here or something
// but this is mine tho
function login() {
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;

    if (username === 'doggy' && password === 'fanam') {
        window.location.href = 'run.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

// Set the user authentication status in the session storage
function setAuthStatus(status) {
    sessionStorage.setItem('authenticated', status);
}

// Check if the user is authenticated, redirect if not
function checkAuth() {
    const isAuthenticated = sessionStorage.getItem('authenticated');
    if (!isAuthenticated || isAuthenticated !== 'true') {
        window.location.href = 'login.html';
    }
}

// Function to logout and clear authentication status
function logout() {
    sessionStorage.setItem('authenticated', 'false');
    window.location.href = 'login.html';
}

