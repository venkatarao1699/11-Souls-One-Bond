window.onload = function () {

    const splash = document.getElementById("splashScreen");
    const login = document.getElementById("loginPage");
    const dashboard = document.getElementById("dashboardPage");

    if (dashboard) dashboard.style.display = "none";
    if (login) login.style.display = "flex";

    if (splash) {
        setTimeout(() => {
            splash.style.display = "none";
        }, 2000);
    }

    const musicPlayer = document.getElementById("musicPlayer");
    const bottomNav = document.getElementById("bottomNav");

    if (musicPlayer) musicPlayer.style.display = "none";
    if (bottomNav) bottomNav.style.display = "none";
};
// ===========================
// Floating Hearts
// ===========================

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=["❤️","💖","💕","✨","🌸"][Math.floor(Math.random()*5)];

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(4+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},900);

// ===========================
// Sparkles
// ===========================

setInterval(()=>{

const s=document.createElement("div");

s.className="spark";

s.style.left=Math.random()*100+"vw";

s.style.bottom="-10px";

s.style.animationDuration=(3+Math.random()*3)+"s";

document.body.appendChild(s);

setTimeout(()=>{

s.remove();

},6000);

},250);