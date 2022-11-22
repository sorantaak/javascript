// const button = document.querySelector("button");
// button.addEventListener("click", () => {
// 	console.log("you clicked me");
// });

const lists = document.querySelectorAll("li");

lists.forEach((item) => {
	item.addEventListener("click", (e) => {
		// console.log(e);
		// console.log(e.target);
		// console.log(item);
		e.target.style.textDecoration = "line-through";
		// item.remove();
	});
});
