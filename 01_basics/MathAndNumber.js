const num = 100;
console.log(num);

console.log(num.toFixed(2));

const num2 = 23.89666;
console.log(num2.toPrecision(3)); // here it take 2 value before decimal and 1 value after decial , hence it print 23.9

const num3 = 123.89666;
console.log(num3.toPrecision(3)); // take precision to 3 value first take before the decimal and then to decimal, here 3 value are there before decimal so it print 124

const hundred = 1000000;
console.log(hundred.toLocaleString("en-IN")); //convert number to comma seperated wrt indian standard

console.log(Math.abs(-4));

console.log(Math.round(4.8)); //round values 4.8 --> 5 and 4.3 --> 4
// console.log(Math.max());

console.log(Math.random()); // any value between 0-1

console.log(Math.floor(Math.random() * 10 + 1)); // any value bet 1-11 , floor is done to int value

//suppose i want any value between max and min
const max = 20;
const min = 10;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
