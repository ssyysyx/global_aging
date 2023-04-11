// JS just toggles a class

document.onkeydown = KeyUp;
// document.body.classList = "pause";

function KeyDown(event) {
    var KeyID = event.which;
    if (KeyID == 39) {
        document.body.classList.remove("pause");
    }
}

document.onkeyup = KeyUp;

function KeyUp(event) {
    var KeyID = event.which;
    if (KeyID == 39) {
        document.body.classList = "pause";
    }
}

document.getElementById("autoplay").addEventListener("click", function () {
    document.body.classList.remove("pause");
});
