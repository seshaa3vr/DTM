const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// script.js

document.addEventListener('DOMContentLoaded', function () {
    const signInForm = document.querySelector('.form-container.sign-in form');
    const signUpForm = document.querySelector('.form-container.sign-up form');

    // Redirect function
    function redirectToVirusTotal(event) {
        event.preventDefault(); // Prevents default form submission
        // Basic validation (optional)
        const email = event.target.querySelector('input[type="email"]').value;
        const password = event.target.querySelector('input[type="password"]').value;

        if (email && password) {
            // Redirect to VirusTotal if both fields are filled
            window.location.href = 'https://www.virustotal.com/';
        } else {
            alert('Please fill in all fields.');
        }
    }

    // Attach event listeners to both forms
    signInForm.addEventListener('submit', redirectToVirusTotal);
    signUpForm.addEventListener('submit', redirectToVirusTotal);
});
