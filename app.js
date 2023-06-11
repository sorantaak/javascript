let num = 12.12;
console.log(num);

let res = num.toFixed(5);
console.log(res);

console.log("Math.round =" + Math.round(num));
console.log("Math.floor =" + Math.floor(num));
console.log("Math.ceil =" + Math.ceil(num));

////////Math.random ////////

let randomNum = Math.random();
console.log("Random Number = " + randomNum);

// create random between two nums 10 and 50
let num1 = 10;
let num2 = 20;
let createNumRandom = Math.floor(Math.random() * (num2 - num1)) + num1;
console.log("Random Number between 10 - 20 : " + createNumRandom);
