const productName = (title) => title;
console.log(productName("Book5"));

const products = [
	{ title: "Book1", exist: true },
	{ title: "Book2", exist: false },
	{ title: "Book3", exist: true },
];

const filteredProducts = products.filter((item) => item.exist);
console.log(filteredProducts);
