// store data in locale storage
localStorage.setItem("name", "mario");
localStorage.setItem("age", 50);

// get data from locale storage
let name = localStorage.getItem("name");
let age = localStorage.getItem("age");
console.log(name, age);

// deleting data from locale storage
// localStorage.removeItem("name");
localStorage.clear(); // clear method removing all data from locale storage

name = localStorage.getItem("name");
age = localStorage.getItem("age");
console.log(name, age);
