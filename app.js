// let userInfo = {
// 	userId: 22,
// 	userName: "Soran",
// 	role: "Admin",
// };

// console.log(`User role is ${userInfo.role}`);

let userInfoOne = {
	userId: 22,
	username: "Soran",
	role: "Admin",
};

let userInfoTwo = {
	userId: 12,
	username: "Test",
	role: "User",
};

let fetchUserData = function (user) {
	console.log(`Usernane is : ${user.username}`);
};
fetchUserData(userInfoOne);
fetchUserData(userInfoTwo);
