const getTodos = (callback) => {
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
	requset.open("GET", "./todos.json");
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
