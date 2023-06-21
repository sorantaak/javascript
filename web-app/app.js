let products = getSaveProducts();

const filters = {
	searchItem: "",
	availableProducts: false,
};
renderProducts(products, filters);
document
	.querySelector("#search-products")
	.addEventListener("input", function (e) {
		filters.searchItem = e.target.value;
		renderProducts(products, filters);
	});
document
	.querySelector("#add-product-form")
	.addEventListener("submit", function (e) {
		e.preventDefault();
		products.push({
			id: uuidv4(),
			title: e.target.elements.productTitle.value,
			exist: true,
		});
		saveProducts(products);
		renderProducts(products, filters);
		e.target.elements.productTitle.value = "";
	});

document
	.querySelector("#available-products")
	.addEventListener("change", function (e) {
		console.log(e.target.checked);
		filters.availableProducts = e.target.checked;
		renderProducts(products, filters);
	});
