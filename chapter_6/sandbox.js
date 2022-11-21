const para = document.querySelector("p"); // select first paragraph on the page

// console.log(para.innerText);
// para.innerText = "sorn is a assowm!";

const paras = document.querySelectorAll("p");
paras.forEach((para) => {
	console.log(para.innerText);
	para.innerText += " New Text";
});

const content = document.querySelector(".content");

// console.log(content.innerHTML);
// content.innerHTML +=`<h2>This is an new H2</h2>`;

const people = ["mario", "luigi", "yoshi"];

people.forEach((person) => {
	content.innerHTML += `<p>${person}</p>`;
});
