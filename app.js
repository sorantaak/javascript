// const numbers = [12, 22, 9, 3, 2];
// const filterNumbers = numbers.filter(function (item, index) {
// 	return item >= 10;
// });
// console.log(filterNumbers);
const productItem = [
	{ title: "Book1", price: 29, exist: true },
	{ title: "Book2", price: 59, exist: false },
	{ title: "Book3", price: 32, exist: true },
	{ title: "Book4", price: 41, exist: false },
	{ title: "Book5", price: 98, exist: true },
];
const productNotExist = function (products) {
	return products.filter((item) => {
		return !item.exist;
	});
};
const result = productNotExist(productItem);
console.log(result);
