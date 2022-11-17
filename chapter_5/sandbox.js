// primitive values
// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreObe : ${scoreOne}`, `scorreTwo:${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreObe : ${scoreOne}`, `scorreTwo:${scoreTwo}`);

// refrence values

const userOne = { name: "soran", age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo);
userTwo.age = 40;
console.log(userOne, userTwo);