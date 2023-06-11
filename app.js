const cartItems = [
	{ title: "Book1", price: 29 },
	{ title: "Book2", price: 59 },
	{ title: "Book3", price: 79 },
];

// const indexValue = cartItem.findIndex(function (item, index) {
// 	return item.title === "Book 2";
// });
// console.log(indexValue);
const findProducts = function (cart, productTitle) {
	const indexValue = cart.findIndex(function (item, index) {
		return item.title.toLowerCase() === productTitle.toLowerCase();
	});

	return indexValue > 0
		? cart[indexValue]
		: `could not find product :${productTitle}`;
};
const result = findProducts(cartItems, "aaaa");
console.log(result);
