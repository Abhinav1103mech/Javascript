const mySym = Symbol("Tanuja");

const user = {
  name: "Abhinav",
  age: 31,
  [mySym]: "Tanuja", //this is how we add symbol in Objects
  isKnown: true,
  lastWatch: ["Monday", "Tuesday"],
  location: "Banglore",
};

console.log(user.isKnown);

console.log(user["isKnown"]); //also a way

console.log(user[mySym]); // this is the only way to get the symbol value

user.age = 30;
console.log(user.age); // now value changed to 30
console.log(user);

//if we want to freeze the Objcet so that no changes can be made
// Object.freeze(user);
// user.name = "Abhinav Gupta";
// console.log(user); //notice that name is not cahnged now

//how to add function in Object

user.greeting = function () {
  console.log(`Hi there ${this.name}`);
};

console.log(user.greeting); //[Function (anonymous)]
console.log(user.greeting()); //Hi there Abhinav
