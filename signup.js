document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();

        
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        
        if (!name || !email || !password) {
            alert('Please fill in all fields.');
            return;
        }

        
        Signup(name, email, password);
    });

    function Signup(name, email, password) {
        
        fetch('https://ask.com/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
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
