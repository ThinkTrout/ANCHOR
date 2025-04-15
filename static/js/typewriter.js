window.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.typewriter');

    elements.forEach(el => {
        const button = el.nextElementSibling?.classList.contains('button') ? el.nextElementSibling : null;
        const originalHTML = el.innerHTML;

        const typingDelay = 500; // 💤 Initial delay
        el.style.visibility = 'hidden'; // 🙈 Hide initially

        // 🧠 Parse content into characters, commands, and pauses
        const segments = [];
        let currentSpeed = 20; // Default typing speed
        let currentPause = 0; // Default pause time
        let i = 0;

        const regex = /\[speed=(\d+)\]|\[pause=(\d+)\]|<\/?[^>]+>|[^<\[]+/g; // Regex to detect [speed=...], [pause=...], HTML tags, and text

        let match;
        while ((match = regex.exec(originalHTML)) !== null) {
            if (match[0].startsWith('[speed=')) {
                currentSpeed = parseInt(match[1], 10);
            } else if (match[0].startsWith('[pause=')) {
                currentPause = parseInt(match[2], 10); // 🛑 Set pause duration
            } else {
                segments.push({ content: match[0], speed: currentSpeed, pause: currentPause });
                currentPause = 0; // Reset pause after it’s used
            }
        }

        setTimeout(() => {
            el.style.visibility = 'visible';
            el.innerHTML = ''; // 🔄 Clear content

            const typeSegment = async (index) => {
                if (index >= segments.length) {
                    // ✅ Done typing
                    if (button) {
                        button.style.opacity = 1;
                        button.style.pointerEvents = 'auto';
                    }
                    return;
                }

                const segment = segments[index];
                const isHTMLTag = /^<\/?[^>]+>$/.test(segment.content);

                if (isHTMLTag) {
                    // 🚀 Inject HTML tags instantly
                    el.innerHTML += segment.content;
                    typeSegment(index + 1);
                } else {
                    // 🧵 Type character by character
                    let charIndex = 0;
                    const typeChar = () => {
                        if (charIndex < segment.content.length) {
                            el.innerHTML += segment.content[charIndex++];
                            setTimeout(typeChar, segment.speed);
                        } else {
                            // 🛑 Pause after typing
                            setTimeout(() => {
                                typeSegment(index + 1);
                            }, segment.pause);
                        }
                    };
                    typeChar();
                }
            };

            typeSegment(0);
        }, typingDelay);
    });
});
