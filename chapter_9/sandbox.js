// find mehtod
const scores = [10, 5, 0, 40, 60, 10, 20, 70];

const scoreHighValue = scores.find((score) => {
	return score > 50;
}); // return first value if condition is true otherwise return undifined

console.log(scoreHighValue);
