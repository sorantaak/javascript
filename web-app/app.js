const product = {
	title:"Book1",
	price:500
}
const {title , price, exist = true} = product
console.log(title);
console.log(price);
console.log(exist);
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
