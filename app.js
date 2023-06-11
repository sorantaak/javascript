const cartItems = ["book1", "book2", "book3", "Book4"];

// Remove first and third item
cartItems.shift();
console.log(cartItems);
cartItems.splice(1, 1);
console.log(cartItems);
// add new item
cartItems.push("Book5");
console.log(cartItems);
// show array product
cartItems.forEach(function (item, index) {
	console.log(`${index + 1} - Product Name: ${item}`);
});
