// =====================================
// Login Controller
// 11 Souls • One Bond
// =====================================

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", loginFriend);

function loginFriend() {

    const phone = document
        .getElementById("phone")
        .value
        .trim();

    const username = document
        .getElementById("username")
        .value
        .trim();

    if (phone === "") {
        alert("Please enter your mobile number ❤️");
        return;
    }

    const friend = friends.find(f => f.phone === phone);

    if (!friend) {
        alert("Sorry! You are not on my friendship list ❤️");
        return;
    }

    // Save logged in friend
    localStorage.setItem(
        "loggedFriend",
        JSON.stringify(friend)
    );

    if (username !== "") {
        localStorage.setItem(
            "enteredName",
            username
        );
    }

    // Hide Login
    document.getElementById("loginPage").style.display = "none";

    // Show Dashboard
    document.getElementById("dashboardPage").style.display = "block";
    document.getElementById("musicPlayer").style.display = "flex";
    document.getElementById("bottomNav").style.display = "flex";

    // Load complete dashboard (Friend Score animation starts here)
    loadDashboard(friend);

    // Play Music

//     const music = document.getElementById("bgMusic");

// if (music) {
    
// }

const music = document.getElementById("bgMusic");

music.currentTime = 0;
music.play().catch(console.error);

    // Apply Theme
    if (typeof applyTheme === "function") {
        applyTheme(friend.theme);
    }

    // Special Theme
    if (friend.special) {

        document.body.classList.add("keerthi-mode");

        if (typeof launchFireworks === "function") {
            launchFireworks();
        }

        if (typeof startKeerthiMode === "function") {
            startKeerthiMode();
        }
    }
}
const search=document.getElementById("friendSearch");

if(search){

search.onkeyup=function(){

const value=this.value.toLowerCase();

document.querySelectorAll(".friendCard").forEach(card=>{

const name=card.dataset.name.toLowerCase();

card.style.display=name.includes(value)?"":"none";

});

};

}
