const getBtn = document.querySelector("#get-btn");
const postBtn = document.querySelector("#post-btn");

const sendHttpRequest = (method, url, data) => {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.responseType = "json";
		if (data) {
			xhr.setRequestHeader("Content-Type", "application/json");
		}
		xhr.onload = () => {
			resolve(xhr.response);
		};
		xhr.onerror = () => {
			reject("Error");
		};

		data ? xhr.send(JSON.stringify(data)) : xhr.send();
	});
};

const getData = () => {
	sendHttpRequest("GET", "https://jsonplaceholder.typicode.com/posts/1")
		.then((res) => console.log(res))
		.catch((er) => console.log(er));
};

const postData = () => {
	sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
		userId: 2,
		id: 2,
		title: "Post Title",
		body: "Post Body",
	})
		.then((res) => console.log(res))
		.catch((er) => console.log(er));
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", postData);
