// dates & time
const now = new Date();

console.log(now);
console.log(typeof now);

//years , maonths , dat, times

console.log("getFullYear :", now.getFullYear());
console.log("getMoths :", now.getMonth());
console.log("getDate :", now.getDate());
console.log("getDay:", now.getDay());
console.log("getHours:", now.getHours());
console.log("getMinute:", now.getMinutes());
console.log("getSeconds:", now.getSeconds());

// timestamps => milisecond first of january 1970
console.log("timestamp: ", now.getTime());

// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());
