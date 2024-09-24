const container = document.querySelector("#container");

const redText = document.createElement("p");
redText.style.color = "red";
redText.classList.add("redText");
redText.textContent = "Hey I'm red";

const blueText = document.createElement("h3");
blueText.style.color = "blue";
blueText.classList.add("blueText");
blueText.textContent = "I'm a blue h3"

const divContainer = document.createElement("div");
const headingOne = document.createElement("h1");
const paragraph = document.createElement("p");

divContainer.setAttribute("style", "border: solid; border-color: black; background: pink;");
//divContainer.style.border = "solid black";
divContainer.classList.add("div-container");

headingOne.classList.add("div-child");
headingOne.textContent = "I'm in a div";
divContainer.appendChild(headingOne);

paragraph.classList.add("div-child");
paragraph.textContent = "ME TOO";
divContainer.appendChild(paragraph);


container.appendChild(redText);
container.appendChild(blueText);
container.appendChild(divContainer);