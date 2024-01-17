document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        
        if (!email || !password) {
            alert('Please fill in all fields.');
            return;
        }

        
        Login(email, password);
    });

    function Login(email, password) {
        
        fetch('https://ask.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Server response:', data);
            
        })
        .catch(error => {
            console.error('Error during fetch operation:', error);
            
        });
    }
});
