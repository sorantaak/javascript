const productItem = [
	{ title: "Book1", price: 29, exist: true },
	{ title: "Book2", price: 59, exist: false },
	{ title: "Book3", price: 32, exist: true },
	{ title: "Book4", price: 41, exist: false },
	{ title: "Book5", price: 98, exist: true },
];
const sortProducts = function (products) {
	products.sort(function (firstEl, secEl) {
		if (firstEl.exist === true && secEl.exist === false) {
			return -1;
		} else if (secEl.exist === true && firstEl.exist === false) {
			return 1;
		} else {
			return 0;
		}
	});
};
sortProducts(productItem);
console.log(productItem);
