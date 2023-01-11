// JavaScript object to store the users
const users = [];

// Signup form submit
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = signupForm.name.value;
    const email = signupForm.email.value;
    const password = signupForm.password.value;
    const passwordConfirm = signupForm.password_confirm.value;

    // Input validation
    if (!name || !email || !password || !passwordConfirm) {
        return alert('All fields are required');
    }
    if (password !== passwordConfirm) {
        return alert('Passwords do not match');
    }

    // Check if the email is already in use
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return alert('Email already in use');
    }

    // Add new user
    const newUser = { name, email, password };
    users.push(newUser);
    alert('User created successfully');
    signupForm.reset();
});

// Login form submit
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    // Input validation
    if (!email || !password) {
        return alert('All fields are required');
    }

    // Check user credentials
    const user = users.find(user => user.email === email);
    if (!user) {
        return alert('User not found');
    }
    if (user.password !== password) {
        return alert('Incorrect password');
    }

    // Log user in
    alert('Welcome ' + user.name);
    loginForm.reset();
});