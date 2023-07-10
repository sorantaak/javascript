class User {
	constructor(id, email) {
		this.id = id;
		this.email = email;
	}
	userInfo() {
		return `ID: ${this.id} - Email: ${this.email}`;
	}
}

class Job extends User {
	constructor(id, email, jobTitle) {
		super(id, email);
		this.jobTitle = jobTitle;
	}
}
const user1 = new Job(2, "test@test.com", "developer");
console.log(user1);
