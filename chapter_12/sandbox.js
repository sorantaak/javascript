const getTodos = (resource) => {
	return new Promise((resolve, reject) => {
		const requset = new XMLHttpRequest();
		requset.addEventListener("readystatechange", () => {
			// console.log(requset, requset.readyState, requset.status);
			if (requset.readyState === 4 && requset.status === 200) {
				const data = JSON.parse(requset.responseText); // parse method convert json text to javascript object
				resolve(data);
			} else if (requset.readyState === 4) {
				reject("error getting resource");
			}
		});
		requset.open("GET", resource);
		requset.send();
	});
};

getTodos("todos/luigid.json")
	.then((data) => {
		console.log("Promise resolved: ", data);
	})
	.catch((err) => {
		console.log("Promise rejected: ", err);
	});

// promise example

// const getSomething = () => {
// 	return new Promise((resolve, reject) => {
// 		// fetch something
// 		// resolve("some data");
// 		reject("some error");
// 	});
// };

// getSomething().then(
// 	(data) => {
// 		console.log(data);
// 	},
// 	(err) => {
// 		console.log(err);
// 	}
// );
// getSomething()
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});
