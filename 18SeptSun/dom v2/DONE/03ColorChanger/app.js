let canvas = document.querySelector("#canvas");
let button = document.querySelector("#button");

function randomColor() {
    const val = "1234567890ABCDEF";
    let hexValue = "#";

    for (let i = 0; i < 6; i++) {
        hexValue = hexValue + val[Math.floor(Math.random() * 16)];
    }
    return hexValue;
}
button.addEventListener("click", function handleClick() {
    let color = randomColor();
    canvas.style.backgroundColor = String(color);
    console.log("clicked")
})