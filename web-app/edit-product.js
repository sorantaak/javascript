const titleElement = document.querySelector("#product-title");
const priceeElement = document.querySelector("#product-price");
const removeBtn = document.createElement("button");
// console.log(location.hash.substring(1));
const productId = location.hash.substring(1);
const products = getSaveProducts();
// console.log(products);
const product = products.find(function (item) {
	console.log(item);
	return item.id === productId;
});

if (product === undefined) {
	location.assign("/index.html");
}

titleElement.value = product.title;
priceeElement.value = product.price;

titleElement.addEventListener("input", function (e) {
	console.log(e.target.value);
	products.map(function (item) {
		if (item.id === productId) {
			item.title = e.target.value;
		}
		console.log(item);
	});
	saveProducts(products);
});
priceeElement.addEventListener("input", function (e) {
	console.log(e.target.value);
	products.map(function (item) {
		if (item.id === productId) {
			item.price = e.target.value;
		}
		console.log(item);
	});
	saveProducts(products);
});
removeBtn.addEventListener("click", function () {
	const newProdcuts = products.filter(function (item) {
		return item.id !== productId;
	});
	saveProducts(newProdcuts);
	location.assign("/index.html");
});
removeBtn.textContent = `remove ${product.title}`;
document.body.appendChild(removeBtn);
