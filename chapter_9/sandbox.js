// example 1 - sorting strings
const names = ["mario", "shaun", "chun-li", "luigi"];
names.sort();
console.log(names); // sort method unlike others array mehtods , alter the original array

// example 2 = sorting numbers
const scores = [10, 50, 20, 5, 35, 70, 45];

// scores.sort((a, b) => {
// 	if (a > b) {
// 		return 1;
// 	} else if (a < b) {
// 		return -1;
// 	} else {
// 		return 0;
// 	}
// });

scores.sort((a, b) => {
	return a - b;
});

console.log(scores);

// exalple3 - sorting objects
const players = [
	{ name: "mario", score: 20 },
	{ name: "luigi", score: 10 },
	{ name: "chunli", score: 50 },
	{ name: "yoshi", score: 30 },
	{ name: "shaun", score: 70 },
];

players.sort((a, b) => {
	return a.score - b.score;
});

console.log(players);
