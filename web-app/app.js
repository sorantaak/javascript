const productItem = [
	{ title: "Book1", exist: true },
	{ title: "Book2", exist: false },
	{ title: "Book3", exist: true },
	{ title: "Book4", exist: false },
];
const productExists = productItem.filter((item) => {
	return item.exist;
});
const existProduct = document.createElement("h2");
existProduct.textContent = `Number of avilable products : ${productExists.length}`;
document.querySelector("body").appendChild(existProduct);

productItem.forEach((item) => {
	const p = document.createElement("p");
	p.textContent = item.title;
	document.querySelector("body").appendChild(p);
});
