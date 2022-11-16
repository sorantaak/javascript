// get a refernce to the 'ul'
const ul = document.querySelector(".people");

let people = ["soran", "amir", "barzan", "shahab", "rahim", "shahram"];

let html = ``;
people.forEach((person) => {
	// create html template
	html += `<li style="color:purple">${person}</li>`;
});
console.log(html);
ul.innerHTML = html;
