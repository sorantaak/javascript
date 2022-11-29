// map method
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// const salePrices = prices.map((price) => {
// 	return price / 2;
// });
const salePrices = prices.map((price) => price / 2);

console.log("original prices: ", prices);
console.log("salePrices", salePrices);

const products = [
	{ name: "gold star", prices: 20 },
	{ name: "mushroom", prices: 40 },
	{ name: "green shells", prices: 30 },
	{ name: "banan skin", prices: 10 },
	{ name: "red shells", prices: 50 },
];

const saleProduct = products.map((product) => {
	if (product.prices > 30) {
		// product.prices = product.prices / 2; // this statemnt cuse alter original porduct object beacuse each items in producs array are object
		// return product;
		return { name: product.name, price: product.prices / 2 };
	} else {
		return product;
	}
});

console.log(saleProduct);
