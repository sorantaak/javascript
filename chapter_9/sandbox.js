// reduce method
const scores = [10, 20, 60, 40, 70, 90, 30];

const result = scores.reduce((acc, curr) => {
	if (curr > 50) {
		acc++;
	}
	return acc;
}, 0);
console.log(result);
// in above example if do not set second argument in reduce method then acc set first element valuted by score arra y acc=10
const scores2 = [
	{ player: "mario", score: 50 },
	{ player: "yoshi", score: 30 },
	{ player: "mario", score: 70 },
	{ player: "crystal", score: 60 },
	{ player: "mario", score: 50 },
	{ player: "yoshi", score: 30 },
	{ player: "mario", score: 70 },
	{ player: "crystal", score: 60 },
	{ player: "mario", score: 50 },
	{ player: "yoshi", score: 30 },
	{ player: "mario", score: 70 },
	{ player: "crystal", score: 60 },
	{ player: "mario", score: 50 },
	{ player: "yoshi", score: 30 },
	{ player: "mario", score: 70 },
	{ player: "crystal", score: 60 },
];

const res = scores2.reduce((acc, curr) => {
	if (curr.player === "mario") {
		acc += curr.score;
	}
	return acc;
}, 0);

console.log("mario totla scores is :", res);
