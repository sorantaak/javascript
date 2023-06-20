document
	.querySelector("#add-product-form")
	.addEventListener("submit", function (e) {
		e.preventDefault();
		const p = document.createElement("p");
		p.textContent = e.target.elements.productTitle.value;
		document.querySelector("#products").appendChild(p);
		console.log(document.querySelector("#products").childNodes);
		e.target.elements.productTitle.value = "";
	});

document
	.querySelector("#search-product")
	.addEventListener("input", function (e) {
		document.querySelector("#search-result").innerHTML = "";
		if (document.querySelector("#products").childNodes.length === 0) return;
		document.querySelector("#products").childNodes.forEach(function (item) {
			if (item.textContent.toLowerCase().includes(e.target.value)) {
				const p = document.createElement("p");
				p.textContent = item.textContent;
				document.querySelector("#search-result").appendChild(p);
			}
			// console.log(item.textContent);
		});
	});
