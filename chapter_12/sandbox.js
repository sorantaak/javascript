const requset = new XMLHttpRequest();

requset.addEventListener("readystatechange", () => {
	// console.log(requset, requset.readyState, requset.status);
	if (requset.readyState === 4 && requset.status === 200) {
		console.log(requset, requset.responseText);
	} else if (requset.readyState === 4) {
		console.log("could not fetch the data");
	}
});
requset.open("GET", "https://jsonplaceholder.typicode.com/todoss/");
requset.send();
