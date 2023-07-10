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

crateProduct = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			products.push({
				title: "New Book",
				price: 99,
			});
			const isCheck = true;
			if (!isCheck) {
				resolve();
			} else {
				reject("Error");
			}
		}, 3000);
	});
};
console.log(crateProduct);
// crateProduct()
// 	.then(getProducts)
// 	.catche((er) => {
// 		console.log(er);
// 	});
crateProduct()
	.then(getProducts)
	.catch((er) => console.log(er));
