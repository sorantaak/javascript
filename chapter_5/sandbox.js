// Object literals
let user = {
	name: "soran",
	age: 41,
	email: "soran.taak@gmail.com",
	location: "Mahabad",
	blogs: ["why mac & chees rules", "10 things make with marmite"],
};

console.log(user);
console.log(user.name);

user.age = 35;
console.log(user.age);

let key = "location";
console.log(user[key]); // user[key] equl user['location']

user["name"] = "Sahar";
console.log(user["name"]);


console.log(typeof user);