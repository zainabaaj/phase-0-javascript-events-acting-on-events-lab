// Your code here
const dodger = document.getElementById("dodger");
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    dodger.style.left = `${left + 1}px`;

}
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    dodger.style.left = `${left - 1}px`;

}