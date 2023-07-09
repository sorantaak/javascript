// console.log(uuidv4());
const getSaveProducts = () => {
	const productsJSON = localStorage.getItem("products");
	try {
		return productsJSON !== null ? JSON.parse(productsJSON) : [];
	} catch (error) {
		return [];
	}
	// if (productsJSON !== null) {
	// 	return JSON.parse(productsJSON);
	// } else {
	// 	return [];

	// }
};

const saveProducts = (products) => {
	localStorage.setItem("products", JSON.stringify(products));
};
const removeProdcut = (id) => {
	const productIndex = products.findIndex((item) => item.id === id);
	if (productIndex > -1) {
		products.splice(productIndex, 1);
	}
};
const toggleProduct = (id) => {
	const product = products.find((item) => item.id === id);
	if (product !== undefined) {
		product.exist = !product.exist;
	}
};
const sortProducts = (products, sortBy) => {
	switch (sortBy) {
		case "byEdited":
			return products.sort(function (a, b) {
				if (a.updated > b.updated) {
					return -1;
				} else if (a.updated < b.updated) {
					return 1;
				} else {
					return 0;
				}
			});
		case "byCreated":
			return products.sort(function (a, b) {
				if (a.created > b.created) {
					// fix error
					return -1;
				} else if (a.created < b.created) {
					return 1;
				} else {
					return 0;
				}
			});
		default:
			return products;
	}
};
const renderProducts = (products, filters) => {
	products = sortProducts(products, filters.sortBy);
	let filteredProducts = products.filter(function (item) {
		return item.title.toLowerCase().includes(filters.searchItem.toLowerCase());
	});
	filteredProducts = filteredProducts.filter((item) => {
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

const createProductDOM = (product) => {
	const productEl = document.createElement("div");
	const checkBox = document.createElement("input");
	const productItem = document.createElement("a");
	const removeButton = document.createElement("button");

	checkBox.setAttribute("type", "checkbox");
	checkBox.checked = !product.exist;
	checkBox.addEventListener("change", () => {
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
	removeButton.addEventListener("click", () => {
		removeProdcut(product.id);
		saveProducts(products);
		renderProducts(products, filters);
	});
	return productEl;
};

const lastEditMessage = (timestamp) => {
	return `Last Edit : ${moment(timestamp).locale("fa").fromNow()}`;
};
