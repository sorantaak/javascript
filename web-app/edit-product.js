const titleElement = document.querySelector("#product-title");
const priceeElement = document.querySelector("#product-price");
const removeBtn = document.createElement("button");
const dateElement = document.querySelector("#last-edit");
// console.log(location.hash.substring(1));
const productId = location.hash.substring(1);
let products = getSaveProducts();
// console.log(products);
let product = products.find((item) => item.id === productId);

if (product === undefined) {
	location.assign("/index.html");
}

titleElement.value = product.title;
priceeElement.value = product.price;
dateElement.textContent = lastEditMessage(product.updated);
removeBtn.textContent = `remove ${product.title} product`;
document.body.appendChild(removeBtn);

titleElement.addEventListener("input", function (e) {
	products.map((item) => {
		if (item.id === productId) {
			item.title = e.target.value;
			item.updated = moment().valueOf();
			removeBtn.textContent = `remove ${product.title} product`;
			dateElement.textContent = lastEditMessage(product.updated);
		}
		console.log(item);
	});
	saveProducts(products);
});
priceeElement.addEventListener("input", function (e) {
	products.map((item) => {
		if (item.id === productId) {
			item.price = e.target.value;
			item.updated = moment().valueOf();
			dateElement.textContent = lastEditMessage(product.updated);
		}
		console.log(item);
	});
	saveProducts(products);
});
removeBtn.addEventListener("click", () => {
	const newProdcuts = products.filter(function (item) {
		return item.id !== productId;
	});
	saveProducts(newProdcuts);
	location.assign("/index.html");
});

window.addEventListener("storage", (e) => {
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
		dateElement.textContent = lastEditMessage(product.updated);
	}
});
