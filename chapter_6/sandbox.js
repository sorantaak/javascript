// const content = document.querySelector("p");
// console.log(content.classList);
// content.classList.add("error");
// content.classList.remove("error");
// content.classList.add("success");

const paras = document.querySelectorAll("p");

paras.forEach((para) => {
	if (para.textContent.includes("success")) {
		para.classList.add("success");
	} else if (para.textContent.includes("error")) {
		para.classList.add("error");
	}
});

const title = document.querySelector(".title");
console.log(title.classList.toggle("test")); //if this class is exist then remove it else add it
// console.log( title.classList.toggle("test"));
