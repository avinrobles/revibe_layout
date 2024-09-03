document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const spotifyBtn = document.getElementById('spotifyBtn');

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }

    if (spotifyBtn) {
        spotifyBtn.addEventListener('click', spotifyLogin);
    }

    // Add smooth appearance animation to form
    document.querySelector('.container').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.container').style.transition = 'opacity 0.5s ease-in-out';
        document.querySelector('.container').style.opacity = '1';
    }, 100);
});

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Encode username and password
    const encodedUsername = btoa(username);
    const encodedPassword = btoa(password);
    
    // Here you would typically send the encoded credentials to your server
    console.log('Encoded Username:', encodedUsername);
    console.log('Encoded Password:', encodedPassword);
    
    // Simulate login process
    document.querySelector('.btn-login').textContent = 'Logging in...';
    document.querySelector('.btn-login').disabled = true;
    setTimeout(() => {
        document.querySelector('.container').classList.add('success-animation');
        setTimeout(() => {
            alert('Login successful!');
            // Redirect to dashboard or home page
        }, 500);
    }, 1500);
}

function handleSignup(event) {
    event.preventDefault();
    const username = document.getElementById('newUsername').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords don't match!");
        shakeForm();
        return;
    }

    // Encode user data
    const encodedUsername = btoa(username);
    const encodedEmail = btoa(email);
    const encodedPassword = btoa(password);

    // Here you would typically send the encoded data to your server
    console.log('Encoded Username:', encodedUsername);
    console.log('Encoded Email:', encodedEmail);
    console.log('Encoded Password:', encodedPassword);

    // Simulate signup process
    document.querySelector('.btn-signup').textContent = 'Signing up...';
    document.querySelector('.btn-signup').disabled = true;
    setTimeout(() => {
        document.querySelector('.container').classList.add('success-animation');
        setTimeout(() => {
            alert('Sign up successful!');
            // Redirect to login page
            window.location.href = 'login.html';
        }, 500);
    }, 1500);
}

function spotifyLogin() {
    // Replace with your Spotify App's client ID and redirect URI
    const clientId = 'YOUR_SPOTIFY_CLIENT_ID';
    const redirectUri = 'YOUR_REDIRECT_URI';
    const scope = 'user-read-private user-read-email';
    
    const spotifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}`;
    
    window.location.href = spotifyAuthUrl;
}

function shakeForm() {
    const form = document.querySelector('.form');
    form.classList.add('shake');
    setTimeout(() => {
        form.classList.remove('shake');
    }, 820);
}