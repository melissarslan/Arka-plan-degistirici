const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["##FFBF00", "#800080", "#eb34c0", "#0000FF", "#FF0000" , "#CD5C5C" , "#40E0D0"];

button.addEventListener("click", changeBackground);

function changeBackground(){
    const rastgeleSayi = Math.floor(Math.random() * colors.length);
    const secilenRenk = colors[rastgeleSayi];
    body.style.backgroundColor = secilenRenk;
}
