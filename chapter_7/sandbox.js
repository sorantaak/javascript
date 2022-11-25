const form = document.querySelector(".signup-form");
// const username = document.querySelector("#username");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	// console.log(username.value);
	console.log(form.username.value);
});

const username = "343434soradf";
const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username)
// if(result){
//     console.log('regex test passed :)');
// }else{
//       console.log("regex test faild :( ");
// }

let result = username.search(pattern); //return integer if pattern is not match, search function return -1 else return positon letter
console.log(result);
