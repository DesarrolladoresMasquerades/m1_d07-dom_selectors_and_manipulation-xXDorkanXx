console.log("Js loaded")

console.log(
    document.querySelector("div.first-div").innerText,
    "\n",
    document.querySelector("div.first-div + div").innerText
)

const firstDiv = Array.from(document.getElementsByClassName("first-div"));

console.log("firstDiv", firstDiv.length);


firstDiv.forEach(console.log);

const divs = Array.from(document.querySelectorAll("div"))

console.log(divs[0]);

divs.forEach(console.log);

const seconDiv = document.getElementById("second-div");

console.log("seconDiv", seconDiv);

// Test for equality

const card = Array.from(document.getElementsByClassName("cards"));
console.log(
    divs[0] === card[0]
)

card.forEach(card=>card.innerText += " and I have been modified")

// selecting on a branch (element inside document)

// document.getElementsByTagName("div").querySelector("p")
divs[0].querySelector("p")