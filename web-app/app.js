const getBtn = document.querySelector("#get-btn");
const postBtn = document.querySelector("#post-btn");

const sendHttpRequest = (method, url) => {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.responseType = "json";
		xhr.onload = () => {
			resolve(xhr.response);
		};
		xhr.onerror = () => {
			reject("Error");
		};
		xhr.send();
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
