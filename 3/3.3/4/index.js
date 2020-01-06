import src from "./avatar.jpg";

var img = new Image();
img.src = src;
document.body.appendChild(img);

let fn = () => true;
console.log(fn());