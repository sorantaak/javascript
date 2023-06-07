let age = 12;
if (age > 20) {
	console.log("Is young");
}
if (age < 20) {
	console.log("Is childe");
}

// new example
let validEmail = true;
let validPassword = false;
if (validEmail && validPassword) {
	console.log("Logged in");
} else if (validEmail || validPassword) {
	console.log("Is Correct");
}

// new example
let isUser = true;
let userRole = "admin";

if (isUser) {
	console.log("Welcome User!");
} else if (userRole === "admin") {
	console.log("Welcome admin");
} else {
	console.log("Welcome");
}
