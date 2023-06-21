// const product = {
// 	title: "Book",
// 	price: 79,
// };

// console.log(JSON.stringify(product));
// const productJson = JSON.stringify(product); // convert product object to string json and insert in prioductJSon variable
// localStorage.setItem("product", productJson);

const productFromJson = localStorage.getItem("product");
const product = JSON.parse(productFromJson);
console.log(product);
console.log(`Title: ${product.title} - Price: ${product.price}`);
