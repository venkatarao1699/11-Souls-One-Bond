function launchFireworks() {

    for (let i = 0; i < 20; i++) {

        let fire = document.createElement("div");

        fire.className = "firework";

        fire.innerHTML = "🎆";

        fire.style.left = Math.random() * 100 + "vw";
        fire.style.top = Math.random() * 70 + "vh";
        fire.style.animationDelay = (Math.random() * 0.8) + "s";

        document.body.appendChild(fire);

        setTimeout(() => {
            fire.remove();
        }, 2500);
    }

}