// class

class User {
	constructor(username, email) {
		// set up properties
		this.username = username;
		this.email = email;
		this.score = 0;
	}

	login() {
		console.log(`${this.username} just logged in`);
		return this;
	}
	logout() {
		console.log(`${this.username} just logged out`);
		return this;
	}
	incScore() {
		this.score++;
		console.log(`${this.username} has a score of ${this.score}`);
		return this;
	}
}

class Admin extends User {
	constructor(username, email, title) {
		super(username, email);
		this.title = title;
	}
	deleteUser(user) {
		users = users.filter((u) => u.username !== user.usernam);
	}
}

const userOne = new User("soran", "soran@gmailcom");
const userTwo = new User("luigi", "luigi@gmail.com");
const userThree = new Admin("sirwan", "sirwan@gmail.com", "black-belt-ninja");

console.log(userThree);
let users = [userOne, userTwo, userThree];
