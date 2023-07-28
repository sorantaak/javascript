const now = new Date();
console.log(now);
console.log(`Year : ${now.getFullYear()}`);
console.log(`Month : ${now.getMonth()}`);
console.log(`Day : ${now.getDay()}`);
console.log(`Houer : ${now.getHours()}`);
console.log(`Minute : ${now.getMinutes()}`);
console.log(`Second : ${now.getSeconds()}`);

const timestamp = now.getTime();
console.log(`Timestamp ${timestamp}`);
const newDate = new Date(timestamp);
console.log(`Year : ${newDate.getFullYear()}`);
