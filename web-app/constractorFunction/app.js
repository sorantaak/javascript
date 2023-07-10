class User {
	constructor(id, email) {
		this.id = id;
		this.email = email;
	}
	get userInfo() {
		return `ID : ${this.id} - Email: ${this.email}`;
	}
	set userInfo(value) {
		const part = value.split(" ");
		this.id = part[0];
		this.email = part[1];
	}
}
const user1 = new User(2, "aaa@mail.com");
user1.userInfo = "10 tt@mail.com";
console.log(user1.userInfo);
