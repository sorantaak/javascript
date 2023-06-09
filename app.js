function checkPassword(pass) {
	if (pass.length > 8 && !pass.includes("12345")) {
		return true;
	}
	return false;
}
let passowrd = "soran_taak54123";
console.log(checkPassword('abcd12345'));
console.log(checkPassword('abcd12'));
console.log(checkPassword('abcdabcd22'));
