let myDate = new Date();
console.log(typeof myDate);

console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getMonth());

let myDate2 = new Date(2023, 0, 23); //0 month is jan
console.log(myDate2.toDateString());
console.log(myDate2.getTime());

let myDate3 = new Date(2023, 0, 23, 5);
console.log(myDate3.toLocaleString());

console.log(Date.now()); //all in mili sec
console.log(Math.floor(Date.now() / 1000)); // in sec

myDate.toLocaleString("default", {
  weekday: "long",
});
console.log(myDate);
