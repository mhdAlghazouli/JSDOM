
console.log(`script.js | 02`);
console.log(`Hello DOM!`);

const theHeader = document.getElementById("header");
const theBtn = document.getElementsByTagName("button");
const theDiv = document.querySelector("div");
const theGreenPara = document.getElementsByClassName("green");

console.log(theGreenPara);
// console.dir(theHeader);
// console.dir(theBtn[0]);
// console.log(theHeader.textContent);

theGreenPara[0].style.color = "orange";
theHeader.textContent = "This is my new header";
theBtn[0].innerHTML = "Please Click Me!";

theHeader.style.color = "#ff0000";

const myNewPara = document.createElement("p");
myNewPara.textContent = "I'm the new paragraph";

console.log(myNewPara);
console.log(theDiv);

theDiv.appendChild(myNewPara);

myNewPara.style.color = `#0000ff`;