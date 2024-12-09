
// search-bar.js

document.addEventListener('DOMContentLoaded', () => {
    // Array of placeholder texts (treatments)
    const placeholderTexts = [
        "Search 'Laser Hair Removal'", 
        "Search 'Hair Transplant'", 
        "Search 'Eyebrow Transplant'", 
        "Search 'Microblading'", 
        "Search 'Hydra Facial'", 
        "Search 'Tattoo Removal'",
        "Search 'Skin Glowing Treatment'", 
        "Search 'Double Chin Slimming'", 
        "Search 'Dental Implants'", 
        "Search 'Body Slimming'"
    ];

    let currentIndex = 0;
    const searchInput = document.getElementById('search-input');
    const placeholderContainer = document.querySelector('.SearchBar__PlaceholderContainer');

    // Function to change the placeholder text
    function updatePlaceholder() {
        // Get the current text from the array based on the index
        const currentText = placeholderTexts[currentIndex];

        // Update the text content of the container
        placeholderContainer.textContent = currentText;

        // Move to the next index in the array
        currentIndex = (currentIndex + 1) % placeholderTexts.length; // Loop back to start
    }

    // Set interval to change the placeholder every 2 seconds (2000ms)
    const interval = setInterval(updatePlaceholder, 2000);

    // Hide the animated placeholder when the user focuses on the input
    searchInput.addEventListener('focus', () => {
        placeholderContainer.style.display = 'none';
    });

    // Show the animated placeholder when input is empty and loses focus
    searchInput.addEventListener('blur', () => {
        if (!searchInput.value) {
            placeholderContainer.style.display = 'block';
        }
    });

    // Initial call to set the first placeholder text
    updatePlaceholder();
});
