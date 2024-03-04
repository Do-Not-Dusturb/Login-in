function login() {
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;

    if (username === 'admin' && password === 'admin') {
        setAuthStatus('true');
        window.location.href = 'run.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

function setAuthStatus(status) {
    sessionStorage.setItem('authenticated', status);
}
