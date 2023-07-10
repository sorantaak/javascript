// const User = {
// 	id: 2,
// 	email: "soran.taak@gmail.com",
// 	userInfo: function () {
// 		return `ID: ${this.id} - Email: ${this.email}`;
// 	},
// };

const User = function (email) { // there is User is constractor. 
	this.email = email;
};
const username = new User("test@test.com"); // when use new perfrix function infact we created object from function. username is object now => {} . user is constractor
console.log(username);
const username2 = new User("test2@test.com");
console.log(username2);
