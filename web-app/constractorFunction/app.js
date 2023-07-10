const products = [
	{ title: "book 1", price: 79 },
	{ title: "book 2", price: 29 },
	{ title: "book 3", price: 59 },
];

getProducts = () => {
	setTimeout(() => {
		const fetchProduct = products.map(
			(item) => `Product: ${item.title} - Price: ${item.price}`
		);
		console.log(fetchProduct);
	}, 2000);
};
crateProduct = (callback) => {
	setTimeout(() => {
		products.push({
			title: "New Book",
			price: 99,
		});
		callback();
	}, 3000);
};

crateProduct(getProducts);

