const titleElement = document.querySelector("#product-title");
const priceeElement = document.querySelector("#product-price");
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
titlePrice.value = product.price;
