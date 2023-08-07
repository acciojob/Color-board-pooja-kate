//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("board");

    for (let i = 0; i < 800; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        board.appendChild(box);
    }
});
