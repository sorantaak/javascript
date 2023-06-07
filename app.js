let userAccount = {
	fullName: "soran taak",
	inCome: 0,
	outCome: 0,
};

let addIncome = function (user, amount) {
	user.inCome += amount;
};
let addOutcome = function (user, amount) {
	user.outCome += amount;
};

let getBalanceAccoutInfo = function (user) {
	let res = `${user.fullName} is inCome : ${user.inCome} and outCome is: ${
		user.outCome
	}. and balance is:
	${user.inCome - user.outCome}
	`;
	return res;
};

addIncome(userAccount, 10000);
addOutcome(userAccount, 4500);
console.log(getBalanceAccoutInfo(userAccount));
