// callbacks & foreach

const myFunc = (callbackFunc) => {
	//do something
	let value = 50;
	callbackFunc(value);
};

myFunc((value) => {
	console.log(value);
});

let people = ["soran", "amir", "barzan", "shahab", "rahim", "shahram"];

people.forEach((person, index) => {
	console.log(index, person);
});

const logPerson = (person, index) => {
	console.log(`${index} - hello ${person}`);
};
people.forEach(logPerson);
