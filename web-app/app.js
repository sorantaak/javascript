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
		const id = uuidv4();
		products.push({
			id: id,
			title: e.target.elements.productTitle.value,
			price: "",
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

window.addEventListener("storage", function (e) {
	if (e.key === "products") {
		console.log(JSON.parse(e.newValue));
		products = JSON.parse(e.newValue);
		renderProducts(products, filters);
	}
});
const now = moment();

now.locale("fa");
console.log(now.format("YYYY-MM-DD HH:mm"));
