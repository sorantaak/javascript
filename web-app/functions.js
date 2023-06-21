console.log(uuidv4());
const getSaveProducts = function () {
	const productsJSON = localStorage.getItem("products");
	if (productsJSON !== null) {
		return JSON.parse(productsJSON);
	} else {
		return [];
	}
};

const saveProducts = function (products) {
	localStorage.setItem("products", JSON.stringify(products));
};
const removeProdcut = function (id) {
	const productIndex = products.findIndex(function (item) {
		return item.id === id;
	});
	if (productIndex > -1) {
		products.splice(productIndex, 1);
	}
};
const toggleProduct = function (id) {
	const product = products.find(function (item) {
		return item.id === id;
	});
	if (product !== undefined) {
		product.exist = !product.exist;
	}
};

const renderProducts = function (products, filters) {
	let filteredProducts = products.filter(function (item) {
		return item.title.toLowerCase().includes(filters.searchItem.toLowerCase());
	});
	filteredProducts = filteredProducts.filter(function (item) {
		if (filters.availableProducts) {
			return item.exist;
		} else {
			return true;
		}
	});
	document.querySelector("#products").innerHTML = "";
	filteredProducts.forEach(function (item) {
		document.querySelector("#products").appendChild(createProductDOM(item));
	});
};

const createProductDOM = function (product) {
	const productEl = document.createElement("div");
	const checkBox = document.createElement("input");
	const productItem = document.createElement("a");
	const removeButton = document.createElement("button");

	checkBox.setAttribute("type", "checkbox");
	checkBox.checked = !product.exist;
	checkBox.addEventListener("change", function () {
		toggleProduct(product.id);
		saveProducts(products);
		renderProducts(products, filters);
	});
	productEl.appendChild(checkBox);

	productItem.textContent = product.title;
	productItem.setAttribute("href", `/edit-product.html#${product.id}`);
	productEl.appendChild(productItem);

	removeButton.textContent = "Remove";
	productEl.appendChild(removeButton);
	removeButton.addEventListener("click", function () {
		removeProdcut(product.id);
		saveProducts(products);
		renderProducts(products, filters);
	});
	return productEl;
};
