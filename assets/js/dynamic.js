const words = ["Programmer", "Gamer", "Tech Enthusiast", "Photographer", "Designer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const dynamicText = document.querySelector(".dynamic-text");

function typeEffect() {
    if (!dynamicText) return; // Ensure element exists

    const currentWord = words[index];
    
    if (isDeleting) {
        // Smoothly delete without erasing completely
        charIndex--;
    } else {
        charIndex++;
    }

    dynamicText.textContent = currentWord.substring(0, charIndex);

    // Control timing
    let speed = isDeleting ? 50 : 100; 

    if (!isDeleting && charIndex === currentWord.length) {
        // Hold full word before deleting
        setTimeout(() => (isDeleting = true), 1000);
    } else if (isDeleting && charIndex === 0) {
        // Move to next word without empty state
        isDeleting = false;
        index = (index + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

// Start after DOM loads
document.addEventListener("DOMContentLoaded", typeEffect);
