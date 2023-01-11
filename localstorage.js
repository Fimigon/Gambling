const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');

// Signup form submit
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = signupForm.name.value;
    const email = signupForm.email.value;
    const password = signupForm.password.value;
    
    // input validation
    if (!name || !email || !password) {
        return alert('All fields are required');
    }
    
    // Store user data
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('User created successfully');
    signupForm.reset();
});

// Login form submit
login