function showSurprise(friend){

    const old = document.getElementById("giftModal");
    if(old) old.remove();

    const modal = document.createElement("div");
    modal.id = "giftModal";

    modal.innerHTML = `
    <div class="giftContainer">

        <div id="giftBox" class="giftBox">
            <div class="giftLid">🎀</div>
            <div class="giftBody">🎁</div>
        </div>

        <h2 id="giftTitle">Click the Gift 🎁</h2>

        <div id="giftMessage" style="display:none">
            <h1>❤️ Happy Friendship Day ❤️</h1>
            <h2>${friend.name}</h2>

            <p> ${friend.suprise}
            </p>

            <button id="closeGift">Close</button>

        </div>

    </div>
    `;

    document.body.appendChild(modal);
    console.log(document.getElementById("giftBox"));
    console.log(typeof launchFireworks);

    document.getElementById("giftBox").onclick = function () {

    this.classList.add("openGift");

    this.style.pointerEvents = "none";

    setTimeout(() => {
        launchFireworks();

        this.style.transform = "scale(0)";
        this.style.opacity = "0";

        document.getElementById("giftTitle").style.display = "none";

        const msg = document.getElementById("giftMessage");

        msg.style.display = "block";
        msg.style.animation = "zoomIn 1s ease";

        createConfetti();

    }, 1200);

}

    document.getElementById("closeGift").onclick=function(){

        modal.remove();

    }

}
function createConfetti() {

    for (let i = 0; i < 80; i++) {

        const c = document.createElement("div");

        c.className = "confetti";

        c.style.left = Math.random() * 100 + "vw";

        c.style.background = [
            "#ff4d6d",
            "#ffd166",
            "#06d6a0",
            "#4cc9f0",
            "#9b5de5"
        ][Math.floor(Math.random() * 5)];

        c.style.animationDuration = (2 + Math.random() * 2) + "s";

        document.body.appendChild(c);

        setTimeout(() => c.remove(), 4000);
    }

}

function launchFireworks(){

    for(let i=0;i<25;i++){

        const fire=document.createElement("div");

        fire.className="firework";

        fire.style.left=Math.random()*100+"vw";
        fire.style.top=Math.random()*80+"vh";

        fire.style.background=`hsl(${Math.random()*360},100%,60%)`;

        document.body.appendChild(fire);

        setTimeout(()=>{
            fire.remove();
        },1200);
    }

}