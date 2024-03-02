// Function to check user authentication status and redirect if not authenticated
function checkAuth() {
    const isAuthenticated = sessionStorage.getItem('authenticated');
    if (!isAuthenticated || isAuthenticated !== 'true') {
        window.location.href = 'index.html';
    }
}

// Run the authentication check when the page loads
checkAuth();
