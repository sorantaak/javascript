const cartDetails = (username, totalPrice, ...products) => {
	console.log(`username : ${username}`);
	console.log(`totalprice : ${totalPrice}`);
	console.log(`username : ${products.join(", ")}`);
};
cartDetails("soran", 150, "book1", "book2", "book3");
// const getBtn = document.querySelector("#get-btn");
// const postBtn = document.querySelector("#post-btn");

// const getData = () => {
// 	axios
// 		.get("https://jsonplaceholder.typicode.com/posts/1")
// 		.then((res) => console.log(res));
// };

// const postData = () => {
// 	axios
// 		.post("https://jsonplaceholder.typicode.com/posts", {
// 			userId: 3,
// 			id: 107,
// 			title: "Post title",
// 			body: "Post body",
// 		})
// 		.then((res) => console.log(res));
// };

// getBtn.addEventListener("click", getData);
// postBtn.addEventListener("click", postData);
