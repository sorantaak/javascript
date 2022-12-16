// constractor function
function User(username, email) {
	this.username = username;
	this.email = email;
	this.login = function () {
		console.log(`${this.username} logged in`);
	};
}
// class User {
// 	constructor(username, email) {
// 		// set up properties
// 		this.username = username;
// 		this.email = email;
// 		this.score = 0;
// 	}
// }

const userOne = new User("soran", "soran@gmailcom");
const userTwo = new User("luigi", "luigi@gmail.com");
console.log(userOne, userTwo);
userOne.login();

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object
