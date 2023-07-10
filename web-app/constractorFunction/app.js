// const User = function (id, email) {
// 	// there is User is constractor.
// 	this.email = email;
// 	this.id - id;
// };
// User.prototype.userInfo = function () {
// 	return `ID: ${this.id} - Email: ${this.email}`;
// };
// const username = new User(2, "test@test.com");
// console.log(username.userInfo());
// const username2 = new User(6, "test2@test2.com");
// console.log(username2.userInfo());
class User {
	constructor(id, email) {
		this.id = id;
		this.email = email;
	}
	userInfo() {
		return `ID: ${this.id} - Email: ${this.email}`;
	}
}
const user1 = new User(2, "test@test.com");
console.log(user1.userInfo());
