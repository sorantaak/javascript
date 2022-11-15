// template strings
const title = "Best reads of 2019";
const author = "Mario";
const likes = 30;

// concatenations way
// let result =
// 	"The blog called " + title + " bye " + author + " has " + likes + " likes";
// console.log(result);

// template string way
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// creating html templates
let html = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span>This Blog has ${likes} likes </span>
`;
console.log(html);
