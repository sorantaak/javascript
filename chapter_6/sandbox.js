// const button = document.querySelector("button");
// button.addEventListener("click", () => {
// 	console.log("you clicked me");
// });
const ul = document.querySelector("ul");
const button = document.querySelector("button");

button.addEventListener("click", () => {
	// ul.innerHTML += "<li>something new</li>";
	const li = document.createElement("li");
	li.textContent = "something new to do";
	// ul.append(li);
	ul.prepend(li);
});
// const lists = document.querySelectorAll("li");

// lists.forEach((item) => {
// 	item.addEventListener("click", (e) => {
// 		console.log("event in li");
// 		e.stopPropagation();
// 		e.target.remove();
// 	});
// });

ul.addEventListener("click", (e) => {
	// console.log("event in Ul");
	// console.log(e.target);
	console.log(e.target.tagName);
	if (e.target.tagName === "LI") {
		e.target.remove();
	}
});
