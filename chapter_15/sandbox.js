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

function Admin(username, email, title) {
	User.call(this, username, email);
	this.title = title;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function () {
	// delete user
};
console.log(Admin.prototype);

const userOne = new User("soran", "soran@gmailcom");
const userTwo = new User("luigi", "luigi@gmail.com");
const userThree = new Admin("shaun", "shaun@gmail.com", "black-belt-ninja");

console.log(userOne, userTwo, userThree);
userOne.login().logout();

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object
