const cartItems = ["book1", "book2", "book3", "Book4"];
cartItems.push("Book5"); // Append new element end of array
console.log(cartItems);
cartItems.pop(); // remove the last element fron an array and return it.
console.log(cartItems);
console.log("new Lenght of Array is : " + cartItems.unshift("Book0")); // Insert new elements at the start of array  and return the new length of Array
console.log(cartItems);

console.log(
	"remove first element by shift array method and it is: " + cartItems.shift()
); // remove first element of an array and returns it

console.log(cartItems);

// splcie method
cartItems.splice(0, 2);
console.log("after splice start 0 and countdelete is 2 : ", cartItems);

cartItems.splice(0, 2, "new Item");
console.log("after splice start 0 and countdelete is 2 : ", cartItems);
