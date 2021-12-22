import("./index.css");
// import image from "./logo.jpg" or png
import image from './logo.jpg';
// console.log(image);

const root = document.getElementById("root");
root.classList.add("mainDiv");

const navBar = document.createElement("div");
const h1 = document.createElement("h1");

navBar.classList.add("navBar");
h1.innerHTML = "Notepad";
h1.classList.add("redcolor");



const img = document.createElement("img");
img.src = image;
img.classList.add("pics");

navBar.append(img,h1);

root.append(navBar);

let mainDiv = document.createElement("div");

let inputDiv = document.createElement("div");

inputDiv.classList.add("inputBox");
mainDiv.classList.add("mainBox");

let textarea = document.createElement("TEXTAREA");

textarea.id = "textString";

let btn = document.createElement("button");

btn.id = "btn";
btn.innerText = "Click";

inputDiv.append(textarea,btn);

mainDiv.append(inputDiv);

let outputDiv = document.createElement("div");
let p = document.createElement("p");
p.id = "para";
p.innerText = "Enter text below to display";

outputDiv.append(p);
outputDiv.classList.add("outputDiv")

mainDiv.append(outputDiv);

root.append(mainDiv);

let fun = document.getElementById("btn");

fun.addEventListener("click",()=>{
    let inputText = document.getElementById("textString");
    let para = document.getElementById("para");
    para.innerText = inputText.value;
})