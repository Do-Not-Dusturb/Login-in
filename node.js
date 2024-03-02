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

