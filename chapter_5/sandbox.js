// Object literals
let user = {
	name: "soran",
	age: 41,
	email: "soran.taak@gmail.com",
	location: "Mahabad",
	blogs: ["why mac & chees rules", "10 things make with marmite"],
	login: function () {
		console.log("the user loged in!");
	},
	logout: function () {
		console.log("the user loged out");
	},
	logBlogs: function () {
		// this.blogs.forEach((blog) => {
		// 	console.log(blog);
		// });
	},
};

user.login();
user.logout();
// user.logBlogs();

const fname = "soran";
fname.toUpperCase();
