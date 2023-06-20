const products = [
	{ title: "Node.js Design Pattern" },
	{ title: "You Dont Know JS: this & Object Prototypes" },
	{ title: "Functional React" },
	{ title: "You Dont Know JS: Async & Performance" },
];
const filters = {
	searchItem: "",
};

const rennderProducts = function (products, filters) {
	const filterProducts = products.filter(function (item) {
		return item.title.toLowerCase().includes(filters.searchItem.toLowerCase());
	});
	console.log(filterProducts);
};

rennderProducts(products, filters);

document
	.querySelector("#search-products")
	.addEventListener("input", function (e) {
		filters.searchItem = e.target.value;
		rennderProducts(products, filters);
	});
