function checkAuth() {
    const isAuthenticated = sessionStorage.getItem('authenticated');
    if (!isAuthenticated || isAuthenticated !== 'true') {
        window.location.href = 'login.html';
    }
}

checkAuth();
