const link = document.querySelector("a");

console.log(link.getAttribute("href"));

link.setAttribute("href", "https://www.yahoo.com");
console.log(link.getAttribute("href"));
link.innerText = "the yahoo website";

const messg = document.querySelector("p");

console.log(messg.getAttribute("class"));
messg.setAttribute("class", "success");
console.log(messg.getAttribute("class"));
messg.setAttribute("style", "color:blue");
