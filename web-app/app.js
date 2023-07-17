const getBtn = document.querySelector("#get-btn");
const postBtn = document.querySelector("#post-btn");

const sendHttpRequest = (method, url, data) => {
	console.log(data);
	return fetch(url, {
		method: method,
		body: JSON.stringify(data),
		headers: data
			? {
					"Content-Type": "application/json",
					// 'Content-Type': 'application/x-www-form-urlencoded',
			  }
			: {},
	}).then((res) => {
		return res.json();
	});
};

const getData = () => {
	sendHttpRequest("GET", "https://jsonplaceholder.typicode.com/posts/1")
		.then((res) => console.log(res))
		.catch((er) => console.log(er));
};

const postData = () => {
	sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
		userId: 3,
		id: 107,
		title: "Post title",
		body: "Post body",
	}).then((res) => console.log(res));
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", postData);
