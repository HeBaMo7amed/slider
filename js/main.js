var myImgs = Array.from(document.querySelectorAll(".items img"));
var lightBoxContainer = document.querySelector("#lightBoxContainer");
var lightBox = document.querySelector("#lightBox");
var closingIcon = document.querySelector("#closingIcon");
var nextElement = document.querySelector("#nextElement");
var previousElement = document.querySelector("#previousElement");
var index;
var selectedImgSrc;

for (var i = 0; i < myImgs.length; i++) {
    myImgs[i].addEventListener("click", function (event) {
        selectedImgSrc = event.target.getAttribute("src")
        lightBox.style.backgroundImage = `url(${selectedImgSrc})`
        lightBoxContainer.classList.replace("d-none", "d-flex")
        index = myImgs.indexOf(event.target)
    })
}

closingIcon.addEventListener("click", closeLightBox)
nextElement.addEventListener("click", showNextElement)
previousElement.addEventListener("click", getPreviousElement)
lightBoxContainer.addEventListener("click", function (event) {
    if (event.target != lightBox && event.target != nextElement && event.target != previousElement) {

        closeLightBox
    }
})
document.addEventListener("keyup", function (event) {
    if (lightBoxContainer.classList.contains("d-flex")) {
        switch (event.key) {
            case "ArrowRight":
                getNextElement()
                break;

            case "ArrowLeft":
                getPreviousElement()
                break;

            case "Escape":
                closeLightBox()
                break;

            default:
                break;

        }
    }
})

function closeLightBox() {
    lightBoxContainer.classList.replace("d-flex", "d-none")

}
function showNextElement() {
    index += 1
    if (index >= myImgs.length) index = 0
    selectedImgSrc = myImgs[index].getAttribute("src")
    lightBox.style.backgroundImage = `url(${selectedImgSrc})`
}
function getPreviousElement() {
    index -= 1
    if (index < 0) index = myImgs.length - 1
    selectedImgSrc = myImgs[index].getAttribute("src")
    lightBox.style.backgroundImage = `url(${selectedImgSrc})`
}

