document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('signupForm');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        var isSuccess = true;

        if (isSuccess) {
            alert('Signup Successful! Redirecting to Smallshop.');
            window.location.href = 'landing.html';
        } else {
            alert('Signup Failed. Please try again.');
        }
    });
});
