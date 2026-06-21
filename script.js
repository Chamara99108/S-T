// COUNTDOWN TIMER LOGIC
// Target Date: July 21, 2026
const weddingDate = new Date("July 24, 2026 09:00:00").getTime();

const timerInterval = setInterval(function() {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    // Time Math Conversions
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Dynamic UI Updates
    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

    // Action upon reaching the target date
    if (difference < 0) {
        clearInterval(timerInterval);
        document.getElementById("countdown").innerHTML = "<h3 style='color:#b35d7f; font-family:Cinzel; font-size: 18px;'>THE BIG DAY IS HERE!</h3>";
    }
}, 1000);

// SMOOTH INTERACTIVE SCROLL FUNCTION
function scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
}
