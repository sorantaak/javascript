// practice arrow functions function
// const greet = function(){
//     return 'hello, world';
// }

const greet = () => "hello, wrold";
const result = greet();
console.log(result);

const bill = function (products, tax) {
	let total = 0;
	for (let i = 0; i < products.length; i++) {
		total += products[i] + products[i] * tax;
	}
	return total;
};
// bill and bill2 same function
const bill2 = (products, tax) => {
	let total = 0;
	for (let i = 0; i < products.length; i++) {
		total += products[i] + products[i] * tax;
	}
	return total;
};

console.log(bill([10, 15, 30], 0.2));
console.log(bill2([10, 15, 30], 0.2));
