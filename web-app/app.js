const getBtn = document.querySelector("#get-btn");
const postBtn = document.querySelector("#post-btn");

const sendHttpRequest = (method, url, data) => {
	return fetch(url).then((res) => {
		return res.json();
	});
};

const getData = () => {
	sendHttpRequest("GET", "https://jsonplaceholder.typicode.com/posts/1")
		.then((res) => console.log(res))
		.catch((er) => console.log(er));
};

const postData = () => {};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", postData);
