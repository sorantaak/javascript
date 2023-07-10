// const User = {
// 	id: 2,
// 	email: "soran.taak@gmail.com",
// 	userInfo: function () {
// 		return `ID: ${this.id} - Email: ${this.email}`;
// 	},
// };

const User = function (email, id) {
	// there is User is constractor.
	this.email = email;
	this.id - id;
};
User.prototype.userInfo = function () {
	return `ID: ${this.id} - Email: ${this.email}`;
};
const username = new User("test@test.com", 2); // when use new perfrix function infact we created object from function. username is object now => {} . user is constractor
console.log(username.userInfo());
const username2 = new User("test2@test2.com", 6);
console.log(username2.userInfo());
