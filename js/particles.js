// ======================================
// Floating Hearts & Stars
// ======================================

const particles = document.getElementById("particles");

function createParticle() {

    const p = document.createElement("div");

    const icons = ["❤️", "✨", "⭐", "💖"];

    p.className = "particle";

    p.innerHTML = icons[Math.floor(Math.random() * icons.length)];

    p.style.left = Math.random() * 100 + "vw";

    p.style.fontSize = (16 + Math.random() * 20) + "px";

    p.style.animationDuration = (8 + Math.random() * 8) + "s";

    particles.appendChild(p);

    setTimeout(() => p.remove(), 16000);
}

setInterval(createParticle, 400);