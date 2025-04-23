
    // ⏱️ Control how long the loading takes (in milliseconds)
    const loadingDuration = 2000; // e.g. 4 seconds

    let currentPercent = 0;
    const loadingPercent = document.getElementById('loading-percent');
    const progressBar = document.getElementById('progress-bar');
    const startButton = document.getElementById('start-button');
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');

    function fakeLoading() {
        const intervalTime = loadingDuration / 100;

        const interval = setInterval(() => {
            currentPercent++;
            loadingPercent.textContent = currentPercent + "%";
            progressBar.style.width = currentPercent + "%";

            if (currentPercent >= 100) {
                clearInterval(interval);
                startButton.classList.remove('hidden');
            }
        }, intervalTime);
    }

    function startExperience() {
        const loadingScreen = document.getElementById('loading-screen');
        const mainContent = document.getElementById('main-content');
        const startButton = document.getElementById('start-button');

        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.style.display = 'block';
            mainContent.classList.add('fade-in');
        }, 0);
    }

    window.addEventListener('DOMContentLoaded', fakeLoading);