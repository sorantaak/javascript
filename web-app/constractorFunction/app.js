// const fullName = "Soran Taak";
// const parts = fullName.split(" ");
// console.log(parts);

const product = {
	title: "Book",
	price: 79,
	get productInfo() {
		return `Title : ${this.title} - Price: ${this.price}`;
	},
	set productInfo(value) {
		const parts = value.split(" ");
		this.title = parts[0];
		this.price = parts[1];
	},
};
product.productInfo = "Book100 50";
console.log(product.productInfo);
