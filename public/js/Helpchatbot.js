document.addEventListener('DOMContentLoaded', () => {
    // Toggle chat window
    const chatButton = document.querySelector('.chat-bubble');
    chatButton.addEventListener('click', toggleChatWindow);

    // Toggle operating hours display
    const operatingHoursLink = document.querySelector('.toggle-link');
    operatingHoursLink.addEventListener('click', toggleOperatingHours);

    // Send message button
    const sendButton = document.querySelector('.chat-footer button');
    sendButton.addEventListener('click', sendMessage);

    function toggleChatWindow() {
        const chatWindow = document.getElementById('chat-window');
        chatWindow.classList.toggle('show');
    }

    function toggleOperatingHours() {
        const hours = document.getElementById('operating-hours');
        hours.style.display = hours.style.display === 'none' || hours.style.display === '' ? 'inline' : 'none';
    }

    function sendMessage() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Placeholder for message sending functionality
        alert(`Message sent!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

        // Clear the fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }
});
