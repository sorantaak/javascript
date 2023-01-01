const car = {
	name: "saipa",
	model: "111",
	showCar: function (year, month) {
		console.log(year, month);
		console.log(`show car by name ${this.name} and ${this.model}`);
	},
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
car.showCar.apply(car2, [1965, 40]); // another way to use aplly

//call
displayDeatails.call(car2, 2021, 8);
car.showCar.call(car2, 2024, 1945);

//bind
displayDeatails.bind({ name: "peykan", model: "147" }, 1981, 4)();
const a = displayDeatails.bind({ name: "renualt", model: "2000" }, 2000, 4);
a();

car.showCar.bind({ name: "toyota", model: "500" }, 1000, 5)();
