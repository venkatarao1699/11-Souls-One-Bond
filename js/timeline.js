function showTimeline() {

    const friend = currentFriend;

    const old = document.getElementById("timelineModal");
    if(old) old.remove();

    const modal = document.createElement("div");
    modal.id = "timelineModal";
    modal.className = "timelineModal";

    modal.innerHTML = `
    <div class="timelineCard">

        <span id="closeTimeline">&times;</span>

        <h2>💖 Our Friendship Journey</h2>

        <div class="timeline">

            <div class="timelineItem">
                <div class="circle">🌟</div>

                <div class="content">
                    <h3>First Meeting</h3>
                    <p>${friend.timeline[0]}</p>
                </div>
            </div>

            <div class="timelineItem">
                <div class="circle">🤝</div>

                <div class="content">
                    <h3>Became Best Friends</h3>
                    <p>${friend.timeline[1]}</p>
                </div>
            </div>

            <div class="timelineItem">
                <div class="circle">😂</div>

                <div class="content">
                    <h3>Funny Moments</h3>
                    <p>${friend.timeline[2]}</p>
                </div>
            </div>

            <div class="timelineItem">
                <div class="circle">❤️</div>

                <div class="content">
                    <h3>Forever Friends</h3>
                    <p>${friend.timeline[3]}</p>
                </div>
            </div>

        </div>

        <button id="closeBtn">Close</button>

    </div>
    `;

    document.body.appendChild(modal);

    document.getElementById("closeTimeline").onclick = () => modal.remove();

    document.getElementById("closeBtn").onclick = () => modal.remove();

}