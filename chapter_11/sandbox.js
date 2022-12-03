// timestamps
const befor = new Date("Februray 1 2022 7:30:59");
const now = new Date();

console.log(now.getTime(), befor.getTime()); // getTime() method return timestamps
const result = now.getTime() > befor.getTime();
console.log(result);

const diff = now.getTime() - befor.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 60);

console.log(mins, hours, days);
console.log(`the blog was writeen ${days} days ago`);

// convertign timestamps into objects
const timestamps = 1675938474990;
console.log(new Date(timestamps));
console.log(new Date(timestamps).toLocaleDateString("fa-IR"));
