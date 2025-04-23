// ⏱️ Control how long the loading takes (in milliseconds)
const loadingDuration = 3000; // e.g. 3 seconds

let currentPercent = 0;
const loadingPercent = document.getElementById('loading-percent');
const progressBar = document.getElementById('progress-bar');
const loadingScreen = document.getElementById('loading-screen');
const mainContent = document.getElementById('main-content');
const startButton = document.querySelector('#loading-screen .button'); // Select the "START EXPERIENCE" button

function fakeLoading() {
    const intervalTime = loadingDuration / 100; // Divide duration into 100 steps

    const interval = setInterval(() => {
        currentPercent++;
        loadingPercent.textContent = currentPercent + "%"; // Update percentage text
        progressBar.style.width = currentPercent + "%"; // Update progress bar width

        if (currentPercent >= 100) {
            clearInterval(interval); // Stop the interval when loading is complete

            // Make the "START EXPERIENCE" button visible
            startButton.style.opacity = 1;
            startButton.style.pointerEvents = 'auto';
        }
    }, intervalTime);
}

function startExperience() {
    loadingScreen.classList.add('fade-out'); // Fade out the loading screen
    setTimeout(() => {
        loadingScreen.style.display = 'none'; // Hide the loading screen
        mainContent.style.display = 'block'; // Show the main content
        mainContent.classList.add('fade-in'); // Fade in the main content
    }, 0); // Small delay for smooth transition
}

window.addEventListener('DOMContentLoaded', fakeLoading);