/*
All falsy value 
false , 0. -0, "", null, undefined, NAn


some of the truthy value

"0", "false" , " ", [], {} , function(){ }
*/

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log(`Objcet of zero length `); // Object.keys(emptyObj) gives all the keys in array
}
//?? operator

let val1;
val1 = 5 ?? 10;

console.log(val1); // 5

let val2 = null ?? 10;
console.log(val2); //10

let val3 = undefined ?? 10;
console.log(val3); // 10

// for loop

console.log("continue with loop : ");

const array = [1, 2, 3, 4, 5, 6];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

for (const num of array) {
  console.log(num);
}

const name = "Abhinav";

for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}

for (let i = 0; i < name.length; i++) {
  console.log(name.at(i));
}

for (let i = 0; i < name.length; i++) {
  console.log(name.charAt(i));
}

console.log("another way of printing the string: ");

for (const char of name) {
  console.log(char);
}
