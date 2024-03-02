// add your login code here or something
// but this is mine tho

function login() {
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;

    if (username === 'do_not_dusturb' && password === 'b1u#2011') {
        window.open('https://www.google.com', '_blank');
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

