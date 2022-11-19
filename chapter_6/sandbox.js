// const para = document.querySelector("body > h1"); // selec first p tag in the dom
// console.log(para);

const paras = document.querySelectorAll("p");
console.log(paras); // this node list very like an array but it is not array we can not use all teh array methods
console.log(paras[2]);
const errors = document.querySelectorAll('.error')
console.log(errors);
paras.forEach((para) => {
	console.log(para);
});
