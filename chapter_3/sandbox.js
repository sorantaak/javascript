// break and continue

const score = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < score.length; i++) {
	if(score[i]===0){
		console.log('your score is zero');
		continue;
	}
	console.log("your score: ", score[i]);
	if (score[i] === 100) {
		console.log("congrats, tou got the top score!");
		break;
	}
}
