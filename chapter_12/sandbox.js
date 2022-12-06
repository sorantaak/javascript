const getTodos = (callback) => {
	const requset = new XMLHttpRequest();

	requset.addEventListener("readystatechange", () => {
		// console.log(requset, requset.readyState, requset.status);
		if (requset.readyState === 4 && requset.status === 200) {
			callback(undefined, requset.responseText);
		} else if (requset.readyState === 4) {
			callback("could not fetch the data", undefined);
		}
	});
	requset.open("GET", "https://jsonplaceholder.typicode.com/todos/");
	requset.send();
};
console.log(1);
console.log(2);
getTodos((err, data) => {
	console.log("callback fired");
	// console.log(err, data);
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
});
console.log(3);
console.log(4);

// getTodos(()=>{
//     console.log('another callback');
// });
