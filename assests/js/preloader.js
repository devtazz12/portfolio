const text = "Loading portfolio...";
const typingElement = document.querySelector('.typing-text');
const typeSound = document.getElementById('type-sound');
const preloader = document.getElementById('preloader');
const message = document.getElementById('preloader-msg');

let index = 0;
let soundAllowed = false;

// Enable sound after user interaction
window.addEventListener('click', () => {
  soundAllowed = true;

  // Remove <h4> message
  if (message) message.remove();

  // Clear any text
  typingElement.textContent = "";

  // Start typing
  typeLetter();
}, { once: true });

// Typing function
function typeLetter() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);

    if (text.charAt(index) !== ' ' && soundAllowed) {
      typeSound.currentTime = 0;
      typeSound.play().catch(() => {});
    }

    index++;
    setTimeout(typeLetter, 120);
  } else {
    // After typing complete
    setTimeout(() => {
      typeSound.pause();
      typeSound.currentTime = 0;

      // Fade out preloader
      preloader.classList.add('opacity-0');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 700);
    }, 500);
  }
}

// 🔁 Fallback: Auto-hide preloader after 10s
window.addEventListener('load', () => {
  setTimeout(() => {
    if (preloader.style.display !== 'none') {
      preloader.classList.add('opacity-0');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 700);
    }
  }, 10000); // 10 seconds
});
