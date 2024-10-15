particlesJS.load('particles-js', 'assets/particles-config.json', function() {
    console.log('particles.js loaded');
});

document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const messageElement = document.getElementById('subscription-message');

    if (email) {
        messageElement.textContent = `Thank you for subscribing, ${email}!`;
        messageElement.style.color = '#ff79c6';
        this.reset();
    } else {
        messageElement.textContent = 'Please enter a valid email address.';
        messageElement.style.color = 'red';
    }
});
