window.addEventListener("DOMContentLoaded", () => {
    const el = document.querySelector('.typewriter');
    const button = document.querySelector('.button');
    const text = el.innerHTML;  // Use the innerHTML for multi-line support
    
    // Get the speed from the data-speed attribute
    const typingSpeed = parseInt(el.getAttribute('data-speed')) || 20; // Default speed to 20 if not defined
    const typingDelay = 500; // 💤 delay before typing starts
    
    el.style.visibility = 'hidden'; // Hide the content initially
    
    setTimeout(() => {
        el.style.visibility = 'visible'; // Make the text visible once typing starts
        
        let i = 0;
        el.innerHTML = ''; // Start with empty content
        
        const interval = setInterval(() => {
            el.innerHTML += text[i]; // Add one character at a time
            i++;
            
            // Stop once all characters have been typed
            if (i === text.length) {
                clearInterval(interval);
                
                // Fade in the button after typing is done
                button.style.opacity = 1;
                button.style.pointerEvents = 'auto'; // Enable button interaction
            }
        }, typingSpeed); // Use the dynamic typingSpeed here
    }, typingDelay); // Delay before typing starts
});