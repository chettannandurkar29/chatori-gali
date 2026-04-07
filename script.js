document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const themeToggle = document.getElementById('themeToggle');

    function applyTheme(mode) {
        if (mode === 'dark') {
            document.body.classList.add('dark-mode');
            if (themeToggle) themeToggle.textContent = 'Light Mode';
        } else {
            document.body.classList.remove('dark-mode');
            if (themeToggle) themeToggle.textContent = 'Dark Mode';
        }
    }

    const savedTheme = localStorage.getItem('cg-theme') || 'light';
    applyTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const nextTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
            localStorage.setItem('cg-theme', nextTheme);
            applyTheme(nextTheme);
        });
    }

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Feature forms
    const subscribeForm = document.getElementById('subscribeForm');
    const subscribeMessage = document.getElementById('subscribeMessage');

    if (subscribeForm && subscribeMessage) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('subscribeEmail').value.trim();
            if (!email || !email.includes('@')) {
                subscribeMessage.textContent = 'Please enter a valid email address.';
                subscribeMessage.className = 'message error';
                return;
            }
            localStorage.setItem('cg-subscriber-email', email);
            subscribeMessage.textContent = 'Subscribed successfully. You will receive offers soon!';
            subscribeMessage.className = 'message success';
            subscribeForm.reset();
        });
    }

    // Login Form Handling
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');
    const signupForm = document.getElementById('signupForm');
    const signupMessage = document.getElementById('signupMessage');

    if (!loginForm || !loginMessage || !signupForm || !signupMessage) {
        return;
    }

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
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
});

