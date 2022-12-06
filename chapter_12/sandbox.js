const requset = new XMLHttpRequest();

requset.addEventListener("readystatechange", () => {
	// console.log(requset, requset.readyState, requset.status);
	if (requset.readyState === 4) {
		console.log(requset.responseText);
	}
});
requset.open("GET", "https://jsonplaceholder.typicode.com/todos/");
requset.send();
