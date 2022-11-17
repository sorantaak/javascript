// Object literals
// const blogs = [
// 	{ title: "why mac & chees rules", likes: 30 },
// 	{ title: "10 things make with marmite", likes: 50 },
// ];
// console.log(blogs);
let user = {
	name: "soran",
	age: 41,
	email: "soran.taak@gmail.com",
	location: "Mahabad",
	blogs: [
		{ title: "why mac & chees rules", likes: 30 },
		{ title: "10 things make with marmite", likes: 50 },
	],
	login() {
		console.log("the user loged in!");
	},
	logout() {
		console.log("the user loged out");
	},
	logBlogs: function () {
		console.log("this user has written the following blogs:");
		this.blogs.forEach((blog) => {
			console.log(blog.title , blog.likes);
		});
	},
	logBlogs2: () => {
		console.log(this); // this key word in arrow functin that related to object refers the window object
	},
};

user.logBlogs();
