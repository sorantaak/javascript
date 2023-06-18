document.querySelector("#add-product").addEventListener("click", () => {
	console.log("add Product");
});

document.querySelector("#remove-product").addEventListener("click", () => {
	document.querySelectorAll(".product").forEach((item) => {
		item.remove();
	});
});
