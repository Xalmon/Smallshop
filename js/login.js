document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        var isSuccess = true;

        if (isSuccess) {
            alert('Login Successful! Redirecting to Smallshop.');
            window.location.href = 'landing.html';
        } else {
            alert('Login Failed. Please try again.');
        }
    });
});
