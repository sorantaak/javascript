// constractor function

// notes
// Every object in JavaScript has a prototype
// Prototypes contain all the methods for that object type

function User(username, email) {
	this.username = username;
	this.email = email;
}

User.prototype.login = function () {
	console.log(`${this.username} has logged in`);
	return this;
};
User.prototype.logout = function () {
	console.log(`${this.username} has logged out`);
	return this;
};

const userOne = new User("soran", "soran@gmailcom");
const userTwo = new User("luigi", "luigi@gmail.com");
console.log(userOne, userTwo);
userOne.login().logout();


// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object
