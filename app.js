let course = {
	name: "Advanced Javascript",
	studentLimit: 30,
	studentCount: 0,
	checkAvalibility: function (courseSize) {
		let leftCount = this.studentLimit - this.studentCount;
		return courseSize < leftCount
	},
};
let status = course.checkAvalibility(30);
console.log(status);
// course.checkAvalibility(20);
