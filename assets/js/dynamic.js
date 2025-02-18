const words = ["Programmer", "Gamer", "Tech Enthusiast", "Photographer", "Designer"];
    let index = 0;
    const dynamicText = document.querySelector(".dynamic-text");

    function updateText() {
        dynamicText.textContent = words[index];
        index = (index + 1) % words.length; // Loop back to the first word
    }

    setInterval(updateText, 2000); // Change text every 2 seconds
    updateText(); // Initialize text immediately