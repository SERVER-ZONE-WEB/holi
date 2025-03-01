document.addEventListener('DOMContentLoaded', () => {
    const confettiContainer = document.querySelector('.confetti-container');
    const colors = ['#ffcccb', '#ffeb3b', '#8bc34a', '#00bcd4', '#9c27b0', '#ff4500'];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 3}s`;
        confettiContainer.appendChild(confetti);
    }
});

function playHoli() {
    alert("Happy Holi! 🎉 Enjoy the festival of colors!");
    createConfetti();
}

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        document.body.appendChild(confetti);

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = Math.random() * 2 + 3 + "s";

        setTimeout(() => confetti.remove(), 5000);
    }
}

function playHoli() {
    alert("Happy Holi! 🎉 Enjoy the festival of colors!");
    createConfetti();
}

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        document.body.appendChild(confetti);

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = Math.random() * 2 + 3 + "s";

        setTimeout(() => confetti.remove(), 5000);
    }
}
function playHoli() {
    alert("Happy Holi! 🎉 Enjoy the festival of colors!");
    createConfetti();
}

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        document.body.appendChild(confetti);

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = Math.random() * 2 + 3 + "s";

        setTimeout(() => confetti.remove(), 5000);
    }
}
