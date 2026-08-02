function startKeerthiMode(){

document.body.classList.add("keerthi-mode");

setInterval(()=>{

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(5+Math.random()*4)+"s";

document.body.appendChild(petal);
if(Math.random() > 0.75){

    const butterfly = document.createElement("div");

    butterfly.innerHTML = "🦋";

    butterfly.style.position = "fixed";
    butterfly.style.left = Math.random()*100 + "vw";
    butterfly.style.top = Math.random()*100 + "vh";
    butterfly.style.fontSize = "24px";
    butterfly.style.zIndex = "99999";
    butterfly.style.pointerEvents = "none";
    butterfly.style.transition = "all 8s linear";

    document.body.appendChild(butterfly);

    setTimeout(()=>{
        butterfly.style.transform =
            `translate(${Math.random()*200-100}px,-200px) rotate(360deg)`;
        butterfly.style.opacity = "0";
    },100);

    setTimeout(()=>{
        butterfly.remove();
    },8000);
}

setTimeout(()=>{

petal.remove();

},9000);

},300);
setInterval(createSparkle, 400);
}
window.startKeerthiMode=startKeerthiMode;

function createSparkle(){

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";
    sparkle.style.left = Math.random()*100 + "vw";
    sparkle.style.top = Math.random()*100 + "vh";
    sparkle.style.fontSize = (10 + Math.random()*15) + "px";
    sparkle.style.pointerEvents = "none";
    sparkle.style.zIndex = "99999";
    sparkle.style.opacity = "1";

    document.body.appendChild(sparkle);

    sparkle.animate([
        {opacity:1, transform:"scale(0.5)"},
        {opacity:0, transform:"scale(2)"}
    ],{
        duration:2000,
        easing:"ease-out"
    });

    setTimeout(()=>{
        sparkle.remove();
    },2000);
}