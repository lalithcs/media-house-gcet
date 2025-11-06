// Set launch date/time (5 seconds from now)
const launchDate = new Date(Date.now() + 5000);

const countdownEl = document.getElementById('countdown');
const launchBtn = document.getElementById('launchBtn');

function updateCountdown() {
    const now = new Date();
    const diff = launchDate - now;
    if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        countdownEl.textContent = `Launching in ${hours}h ${minutes}m ${seconds}s`;
    } else {
        countdownEl.textContent = 'Launched!';
        launchBtn.style.display = 'inline-block';
    }
}
setInterval(updateCountdown, 1000);
updateCountdown();

function redirectToHome() {
    window.location.href = 'home.html';
}

let redirected = false;
function updateCountdown() {
    const now = new Date();
    const diff = launchDate - now;
    if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        countdownEl.textContent = `Launching in ${hours}h ${minutes}m ${seconds}s`;
    } else {
        countdownEl.textContent = 'Launched!';
        launchBtn.style.display = 'inline-block';
        if (!redirected) {
            redirected = true;
            setTimeout(redirectToHome, 500); // Redirect after a short delay
        }
    }
}