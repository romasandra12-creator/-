// Ініціалізація анімацій
AOS.init({
    duration: 1000,
    once: true
});

// === ТАЙМЕР ===
// НОВА ДАТА: 14 Серпня 2026 року, 15:00
const weddingDate = new Date("August 14, 2026 15:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "<div style='font-size:1.5rem'>ВЕСІЛЛЯ СЬОГОДНІ!</div>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}, 1000);

// === МУЗИКА ===
function toggleMusic() {
    const audio = document.getElementById('my-audio');
    const vinyl = document.getElementById('vinyl-icon');

    if (audio.paused) {
        audio.play();
        vinyl.style.animationPlayState = 'running';
    } else {
        audio.pause();
        vinyl.style.animationPlayState = 'paused';
    }
}