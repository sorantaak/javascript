// for loops
for (let i = 0; i < 5; i++) {
	console.log("in loop: ", i);
}

console.log("loop finished");

const fNames = ["soran", "sahar", "sirwan", "mahsa"];

for (let i = 0; i < fNames.length; i++) {
	// console.log(i, fNames[i]);
	let html = `<div>${fNames[i]}</div>`;
	console.log(html);
}
