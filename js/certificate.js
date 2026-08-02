// ==========================================
// Friendship Certificate
// ==========================================

function showCertificate() {

    const friend = JSON.parse(localStorage.getItem("loggedFriend"));

    if (!friend) return;

    document.getElementById("certificateName").innerHTML = friend.name;

    document.getElementById("certificateModal").style.display = "flex";

}

function closeCertificate(){

    document.getElementById("certificateModal").style.display="none";

}