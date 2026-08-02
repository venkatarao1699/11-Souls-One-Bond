// ======================================
// Dashboard Controller
// 11 Souls • One Bond
// ======================================

let currentFriend = null;



function loadDashboard(friend){

    currentFriend = friend;
    

    // Welcome Text
    document.getElementById("welcomeName").innerHTML =
        "Welcome, " + friend.name + " ❤️";

    document.getElementById("friendQuote").innerHTML =
        friend.quote;
        const quote = document.getElementById("friendQuote");

if(friend.quoteColor){
    quote.style.color = friend.quoteColor;
}else{
    quote.style.color = "#ffffff";
}
        const welcome = document.getElementById("welcomeName");
        const score = document.getElementById("friendshipScore");
        // console.log(document.body.innerHTML);
        // console.log(document.getElementById("progressFill"))
const progress = document.getElementById("progressFill");
// console.log(progress);

let current = 0;
const target = friend.score || 0;

score.innerHTML = "0%";
progress.style.width = "0%";

const counter = setInterval(() => {
   
    current++;
    

    score.innerHTML = current + "%";
    progress.style.width = current + "%";

    if (current >= target) {
        clearInterval(counter);
    }
}, 50);

if(friend.special){
    welcome.style.textShadow = "0 0 20px #ff69b4, 0 0 40px #ff69b4";
    welcome.style.animation = "pulse 2s infinite";
}else{
    welcome.style.textShadow = "";
    welcome.style.animation = "";
}

    // Apply Theme
    if(typeof applyTheme === "function"){
        applyTheme(friend.theme);
    }

    // Gallery
    if(typeof loadGallery === "function"){
        loadGallery(friend);
    }

    // Timeline
    const timelineBtn = document.getElementById("timelineBtn");

if (timelineBtn) {
    timelineBtn.onclick = function () {
        showTimeline();
    };
}

   
    // Special Theme
    if(friend.special){

        startKeerthiMode();

    }

}

/* ==========================
Menu Buttons
========================== */

const galleryBtn=document.getElementById("galleryBtn");

if(galleryBtn){

galleryBtn.onclick=()=>{

document.getElementById("gallerySection")
.scrollIntoView({

behavior:"smooth"

});

};

}

const letterBtn=document.getElementById("letterBtn");

if(letterBtn){

    letterBtn.onclick=function(){

        openLetter(currentFriend);

    };

}

const giftBtn=document.getElementById("giftBtn");

if(giftBtn){

giftBtn.onclick=()=>{
    showSurprise(currentFriend);



};

}

const certificateBtn=document.getElementById("certificateBtn");

if(certificateBtn){

certificateBtn.onclick=()=>{

showCertificate(currentFriend);

};

}
const toggle = document.getElementById("themeToggle");

toggle.onclick = function(){

    document.body.classList.toggle("darkMode");

    if(document.body.classList.contains("darkMode")){
        this.innerHTML="☀️";
    }else{
        this.innerHTML="🌙";
    }
}

const logoutBtn = document.getElementById("logoutBtn");

if(logoutBtn){

    logoutBtn.onclick = function(){

        showThankYou();

    };
}