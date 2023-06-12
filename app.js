const account = {
	name: "Soran",
	outgo: [],
	income: [],
	addOutgo: function (description, amount) {
		this.outgo.push({ description: description, amount: amount });
	},
	addIcome: function (description, amount) {
		this.income.push({ description: description, amount: amount });
	},
	getAccoutnSummary: function () {
		let totalOutgo = 0;
		let totalIncome = 0;
		let accoutnBalanc = 0;
		this.outgo.forEach(function (item) {
			totalOutgo += item.amount;
		});
		this.income.forEach(function (item) {
			totalIncome += item.amount;
		});
		accoutnBalanc = totalIncome - totalOutgo;
		return `${this.name} income is :${totalIncome} and my outgo is :${totalOutgo} therefore blacnce is : ${accoutnBalanc}`;
	},
};

account.addOutgo("cafe", 38);
account.addOutgo("book", 59);
account.addIcome("job", 1000);
console.log(account.getAccoutnSummary());
