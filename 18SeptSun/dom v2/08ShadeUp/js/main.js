function randompickerbtn() {
    let randomValuePara = document.querySelector("#randomValuePara");
    let value = "1234567890ABCDEF";
    let hexValue = "#";
    for (let i = 0; i < 6; i++) {
        hexValue = hexValue + value[Math.floor(Math.random() * 16)]
    }
    randomValuePara.innerText = hexValue;
}

function hexFindbtn() {
    let inputValue = document.querySelector("#hexInput").value;
    let colorBox = document.querySelector("#color-box");
    colorBox.style.backgroundColor = String(inputValue);
}

function RGBFindbtn() {
    let rInput = document.querySelector("#RInput").value;
    let gInput = document.querySelector("#GInput").value;
    let bInput = document.querySelector("#BInput").value;
    let rgbColorBox = document.querySelector("#rgb-color-box");
    rgbColorBox.style.backgroundColor = String(`rgb(${rInput},${gInput},${bInput})`);
}

function RangeSelector() {
    let rInput = document.querySelector("#RrInput").value;
    let gInput = document.querySelector("#GrInput").value;
    let bInput = document.querySelector("#BrInput").value;
    let rangeColorBox = document.querySelector("#range-color-box");
    rangeColorBox.style.backgroundColor = String(`rgb(${rInput},${gInput},${bInput})`);
}

// hex to rgb converter

String.prototype.convertToRGB = function () {

};

function hexConvbtn() {

}

function rgbConvbtn() {

}
