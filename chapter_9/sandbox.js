// filter method
const scores = [10, 30, 15, 25, 50, 40, 5];

const filterdScores = scores.filter((score) => {
	// filter method do not alter orignal array. but we can define new array variable to result filter valuated.
	return score > 20;
});
console.log("original method: ", scores);
console.log("filter method: ", filterdScores);

const users = [
	{ name: "shaun", premium: true },
	{ name: "yoshi", premium: false },
	{ name: "mario", premium: false },
	{ name: "chun-li", premium: true },
];

// const premiumUsers = users.filter((user) => {
// 	return user.premium;
// });
const premiumUsers = users.filter((user) => user.premium);

console.log("premium users: ", premiumUsers);
