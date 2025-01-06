 // Initialize AOS
 AOS.init({
    duration: 1000,
    once: true
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Music player functionality
const audio = document.getElementById('bgMusic');
const playPauseBtn = document.getElementById('playPauseBtn');
const playPauseIcon = document.getElementById('playPauseIcon');
const volumeSlider = document.getElementById('volumeSlider');

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseIcon.classList.replace('fa-play', 'fa-pause');
    } else {
        audio.pause();
        playPauseIcon.classList.replace('fa-pause', 'fa-play');
    }
});

volumeSlider.addEventListener('input', (e) => {
    const volume = e.target.value / 100;
    audio.volume = volume;
});

document.body.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseIcon.classList.replace('fa-play', 'fa-pause');
    }
}, { once: true });

// Floating hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    
    // Random starting position along the bottom of the screen
    const startPositionLeft = Math.random() * (window.innerWidth - 40); // 40px is approximate heart width
    heart.style.left = startPositionLeft + 'px';
    heart.style.bottom = '-20px';
    
    // Random size between 15px and 35px
    const size = Math.random() * (35 - 15) + 15;
    heart.style.fontSize = size + 'px';
    
    document.body.appendChild(heart);

    // Remove the heart element after animation completes
    heart.addEventListener('animationend', function() {
        heart.remove();
    });
}

// Create hearts at regular intervals
function startHeartAnimation() {
    setInterval(createHeart, 300);
}

// Start the animation when the page loads
window.addEventListener('load', startHeartAnimation);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector("#envelope").addEventListener("click", function () {
    this.classList.toggle("opened"); // Use toggle for cleaner code
});