// get an element by ID
const title = document.getElementById("page-title");
console.log(title);

// get elements by theri class name
const errors = document.getElementsByClassName("error"); // this statement return HtmlCoolection.
console.log(errors);
console.log(errors[0]);
//we can not use forEah in HtmlCollecttion
// errors.forEach((error) => console.log(error));

// get elemets by their tag name
const paras2 = document.getElementsByTagName('p')
console.log(paras2);
console.log(paras2[2]);
