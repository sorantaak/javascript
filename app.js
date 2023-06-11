const cartItems = [
	{ title: "Book1", price: 29 },
	{ title: "Book2", price: 59 },
	{ title: "Book3", price: 79 },
	{ title: "Book4", price: 79 },
	{ title: "Book5", price: 79 },
];

const deleteProduct = function (products, titleProduct) {
	const valIndex = products.findIndex(function (item) {
		return item.title.toLowerCase() === titleProduct.toLowerCase();
	});
	console.log(valIndex);
	if (valIndex > -1) {
		products.splice(valIndex, 1);
		return products;
	} else {
		return `can not find this product :${titleProduct}`;
	}
};

console.log(deleteProduct(cartItems, "book4"));
