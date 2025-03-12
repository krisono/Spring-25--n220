const h1Ref = document.querySelector('h1');
const nameRef  = document.querySelector("#name");
const sizeRef = document.querySelector("#size");

//Cmd + / or Ctrl + /
function changeH1Style(){
    if(h1Ref.style.backgroundcolor !== "red"){
    h1Ref.style.backgroundColor = "red";
} else {
    h1Ref.style.backgroundColor = "white";
}
}

function changeH1Color(e) {
    console.log(e.target.value);
    h1Ref.style.color = e.target.value;
}

function changeH1Size(e) {
h1Ref.style.width = e.target.value
}

function cleanUpH1Size(e) {
    const fontSize = Number(e.target.value);
    if (fontSize >= 8) {
    h1Ref.style.fontSize = fontSize + "px";
    } else {
    e.target.value = 8;
    h1Ref.style.fontSize = "8px";
 }
}

h1Ref.onclick = changeH1Style;

nameRef.onchange = changeH1Color;

sizeRef.oninput = changeH1Size;
sizeRef.onchange = cleanUpH1Size;