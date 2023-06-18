// console.log(document);
// const paragraph = document.querySelector("p");
// console.log(paragraph);
// paragraph.remove();

const ps = document.querySelectorAll("p");
console.log(ps);
ps.forEach((item) => {
	// console.log(item.textContent);
	// item.remove();
	item.textContent = "Update P "; // change content in all p tags
	console.log(item.textContent);
});
