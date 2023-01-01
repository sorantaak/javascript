const car = {
	name: "saipa",
	model: "111",
};

const car2 = {
	name: "tiba",
	model: "741",
};

function displayDeatails(year, month) {
	console.log(year, month);
	console.log(`name ${this.name} and model ${this.model}`);
}

// apply
displayDeatails.apply(car, [2022, 12]);

//call
displayDeatails.call(car2, 2021, 8);

//bind
displayDeatails.bind({ name: "peykan", model: "147" }, 1981, 4)();
const a = displayDeatails.bind({ name: "renualt", model: "2000" }, 2000, 4);
a();
