let sum = function (num1, num2, num3) {
	let res = num1 + num2 + num3;
	return res;
};

console.log(sum(10, 20, 30));

function getUserInfo(name = "soran", id = 1) {
	return "Name: " + name + " " + "Id: " + id;
}

console.log(getUserInfo());
console.log(getUserInfo("Sahar", 39));
