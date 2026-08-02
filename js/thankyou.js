function showThankYou() {

    const old = document.getElementById("thankYouModal");
    if (old) old.remove();

    const modal = document.createElement("div");

    modal.id = "thankYouModal";

    modal.innerHTML = `

    <div class="thankCard">

        <div class="heart">❤️</div>

        <h1>Thank You</h1>

        <h2>Happy Friendship Day</h2>

        <p>

        Thank you for taking the time to visit this website.

        Every friendship is unique, every memory is precious,
        and every smile shared becomes a beautiful story.

        Wishing you happiness, success, and lifelong friendships.

        ❤️ Stay Happy... Stay Connected... ❤️

        </p>

        <h3>Made with ❤️ by</h3>

        <h2>Muppana Venkata Rao</h2>

    </div>

    `;

    document.body.appendChild(modal);

    setTimeout(() => {

        modal.remove();

        localStorage.removeItem("loggedFriend");

        location.reload();

    }, 8000);

    const music = document.getElementById("bgMusic");

if (music) {
    music.pause();
    music.currentTime = 0;
}

}