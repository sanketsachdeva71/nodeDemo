// whatsapp-popup.js

function toggleChatPopup() {
    var popup = document.getElementById("chatPopup");
    popup.style.display = popup.style.display === "none" || popup.style.display === "" ? "block" : "none";
}

function sendMessage(message) {
    var phoneNumber = "917976094754"; // Add your WhatsApp number here, with country code but without the '+'
    var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}

function sendCustomMessage() {
    var message = document.getElementById("customMessage").value;
    if (message !== "") {
        sendMessage(message);
    } else {
        alert("Please enter a message.");
    }
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Attach event listeners to buttons after the DOM is fully loaded
    document.querySelector('.whatsapp-button').addEventListener('click', toggleChatPopup);
    document.querySelectorAll('.predefined-message').forEach(button => {
        button.addEventListener('click', function () {
            sendMessage(this.textContent);
        });
    });
    
    document.querySelector('.btn-success').addEventListener('click', sendCustomMessage);
});
