document.querySelector("#search-products").addEventListener("input", (e) => {
	console.log("input : " + e.target.value);
});
document.querySelector("#search-products").addEventListener("change", (e) => {
	console.log("change : " + e.target.value);
});
