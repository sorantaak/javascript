let products = ["Book1", "Book2", "Book3"];
// const newArray= ['aaaaaaa',...products , 'Book5']
// newArray.push('Book5');
products = [...products, "zzzzzzz"];
console.log(products);
// console.log(newArray);
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
