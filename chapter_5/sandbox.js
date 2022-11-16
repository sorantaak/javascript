// Object literals
let user = {
	name: "soran",
	age: 41,
	email: "soran.taak@gmail.com",
	location: "Mahabad",
	blogs: ["why mac & chees rules", "10 things make with marmite"],
	login() {
		console.log("the user loged in!");
	},
	logout() {
		console.log("the user loged out");
	},
	logBlogs: function () {
		console.log("this user has written the following blogs:");
		this.blogs.forEach((blog) => {
			console.log(blog);
		});
	},
	logBlogs2: () => {
		console.log(this); // this key word in arrow functin that related to object refers the window object
	},
};
user.login();
user.logBlogs();

user.logBlogs2();
console.log(this);
