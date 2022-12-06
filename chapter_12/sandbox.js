const getTodos = (resource, callback) => {
	const requset = new XMLHttpRequest();

	requset.addEventListener("readystatechange", () => {
		// console.log(requset, requset.readyState, requset.status);
		if (requset.readyState === 4 && requset.status === 200) {
			const data = JSON.parse(requset.responseText); // parse method convert json text to javascript object
			callback(undefined, data);
		} else if (requset.readyState === 4) {
			callback("could not fetch the data", undefined);
		}
	});
	requset.open("GET", resource);
	requset.send();
};

getTodos("todos/luigi.json", (err, data) => {
	console.log(data);
	getTodos("todos/mario.json", (err, data) => {
		console.log(data);
		getTodos("todos/shaun.json", (err, data) => {
			console.log(data);
		});
	});
});
