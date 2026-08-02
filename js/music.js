const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

let playing = false;

btn.onclick = function () {

    if (playing) {
        music.pause();
        btn.innerHTML = "▶️";
        playing = false;
    } else {
        music.play();
        btn.innerHTML = "⏸️";
        playing = true;
    }

};