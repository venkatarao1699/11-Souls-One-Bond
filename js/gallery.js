// =======================================
// Premium Gallery
// =======================================

function loadGallery(friend) {

    const gallery = document.getElementById("galleryContainer");

    if (!gallery) return;

    gallery.innerHTML = "";

    const total = friend.photos || 8;

    for (let i = 1; i <= total; i++) {

        const card = document.createElement("div");
        card.className = "photoCard";

        card.innerHTML = `
            <img
                src="assets/images/${friend.folder}/${i}.jpg"
                alt="${friend.name}"
                loading="lazy">
        `;

        card.onclick = function () {
            openViewer(friend, i);
        };

        gallery.appendChild(card);
    }
}

// =======================================
// Image Viewer
// =======================================

function openViewer(friend, index) {

    let current = index;

    const viewer = document.createElement("div");
    viewer.id = "imageViewer";

    viewer.innerHTML = `
        <span id="closeViewer">&times;</span>

        <button id="prevImage">&#10094;</button>

        <img
            id="viewerImage"
            src="assets/images/${friend.folder}/${current}.jpg">

        <button id="nextImage">&#10095;</button>
    `;

    document.body.appendChild(viewer);

    const image = document.getElementById("viewerImage");

    document.getElementById("closeViewer").onclick = function () {
        viewer.remove();
    };

    document.getElementById("prevImage").onclick = function () {

        if (current > 1) {

            current--;

            image.src =
                `assets/images/${friend.folder}/${current}.jpg`;
        }
    };

    document.getElementById("nextImage").onclick = function () {

        if (current < friend.photos) {

            current++;

            image.src =
                `assets/images/${friend.folder}/${current}.jpg`;
        }
    };

    viewer.onclick = function (e) {

        if (e.target.id === "imageViewer") {

            viewer.remove();
        }
    };
}