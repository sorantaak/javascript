const titleElement = document.querySelector("#product-title");
const priceeElement = document.querySelector("#product-price");
const removeBtn = document.createElement("button");
// console.log(location.hash.substring(1));
const productId = location.hash.substring(1);
let products = getSaveProducts();
// console.log(products);
let product = products.find(function (item) {
	// console.log(item);
	return item.id === productId;
});

if (product === undefined) {
	location.assign("/index.html");
}

titleElement.value = product.title;
priceeElement.value = product.price;
removeBtn.textContent = `remove ${product.title} product`;
document.body.appendChild(removeBtn);

titleElement.addEventListener("input", function (e) {
	products.map(function (item) {
		if (item.id === productId) {
			item.title = e.target.value;
			removeBtn.textContent = `remove ${product.title} product`;
		}
		console.log(item);
	});
	saveProducts(products);
});
priceeElement.addEventListener("input", function (e) {
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

window.addEventListener("storage", function (e) {
	// alert("aaaaaaaaaaaaa");
	if (e.key === "products") {
		products = JSON.parse(e.newValue);
		product = products.find(function (item) {
			return item.id === productId;
		});
		if (product === undefined) {
			location.assign("/index.html");
		}

		titleElement.value = product.title;
		priceeElement.value = product.price;
		removeBtn.textContent = `remove ${product.title} product`;
	}
});
