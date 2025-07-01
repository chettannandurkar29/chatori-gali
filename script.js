document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Login Form Handling
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Simple validation
        if (!email || !password) {
            showMessage(loginMessage, 'Please fill in all fields', 'error');
            return;
        }

        // Simulate login (replace with real auth)
        setTimeout(() => {
            showMessage(loginMessage, 'Login successful! Redirecting...', 'success');
            // Redirect after 1.5 seconds
            setTimeout(() => {
                window.location.href = 'order.html'; // Redirect to order page
            }, 1500);
        }, 1000);
    });

    // Signup Form Handling
    const signupForm = document.getElementById('signupForm');
    const signupMessage = document.getElementById('signupMessage');

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm').value;

        // Validation
        if (!name || !email || !password || !confirmPassword) {
            showMessage(signupMessage, 'Please fill in all fields', 'error');
            return;
        }

        if (password.length < 6) {
            showMessage(signupMessage, 'Password must be at least 6 characters', 'error');
            return;
        }

        if (password !== confirmPassword) {
            showMessage(signupMessage, 'Passwords do not match', 'error');
            return;
        }

        // Simulate signup (replace with real auth)
        setTimeout(() => {
            showMessage(signupMessage, 'Account created successfully! You can now login.', 'success');
            signupForm.reset();
            // Auto-scroll to login after success
            setTimeout(() => {
                document.querySelector('#login').scrollIntoView({ behavior: 'smooth' });
            }, 1500);
        }, 1000);
    });

    // Helper function to show messages
    function showMessage(element, message, type) {
        element.textContent = message;
        element.className = 'message ' + type;
        setTimeout(() => {
            element.textContent = '';
            element.className = 'message';
        }, 3000);
    }

    // Mobile menu toggle (if needed)
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
});
