//you can run this file in terminal using command: node Javascript/01_basics/test.js

const nameVal = "Abhinav";
console.log(nameVal);

// nameVal = "New Name"; // This will cause an error because nameVal is a constant and cannot be reassigned.

let age = 25;
console.log(age);

age = 26;
console.log(age); // This is valid because age is declared with let and can be reassigned.

var city = "New York";
console.log(city);

/*
prefer not to use var as it has function scope and can lead to unexpected behaviors.
It's better to use let or const for block scope.
*/

city = "Los Angeles";
console.log(city); // This is valid because city is declared with var and can be reassigned.

myCity = "Chicago"; // Implicit global variable declaration
console.log(myCity);

myCity = "Houston";
console.log(myCity); // This is valid because myCity is implicitly declared as a global variable and can be reassigned.

// Note: Implicit global variables (like myCity) are generally discouraged as they can lead to hard-to-debug issues.

console.table({ nameVal, age, city, myCity });

//null --> null is standard value that represents "no value" or "empty value". It is explicitly assigned to a variable to indicate that it has no value.
let emptyValue = null;
console.log(emptyValue); // Output: null

//undefined --> undefined means a variable has been declared but has not yet been assigned a value.
let notAssigned;
console.log(notAssigned); // Output: undefined

//symbol --> A symbol is a unique and immutable primitive value that can be used as the key of an object property.
let sym1 = Symbol("uniqueIdentifier");
let sym2 = Symbol("uniqueIdentifier");

console.log(sym1 === sym2); // Output: false, because each symbol is unique

// BigInt --> BigInt is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the Number primitive.
let bigIntValue = BigInt(9007199254740991) + BigInt(1);
console.log(bigIntValue); // Output: 9007199254740992n

//boolean --> A boolean represents one of two values: true or false.
let isJavaScriptFun = true;
console.log(isJavaScriptFun); // Output: true

//number --> In JavaScript, the number type is used to represent both integer and floating-point numbers.
let integerNum = 42;
let floatNum = 3.14;
console.log(integerNum); // Output: 42
console.log(floatNum); // Output: 3.14

console.log(typeof nameVal); // Output: string
console.log(typeof age);
console.log(typeof null); // Output: object (this is a known quirk in JavaScript)

let scrore = "33";
console.log("score is of type " + typeof scrore);

let numScore = Number(scrore);
console.log("numScore is of type " + typeof numScore);

let score2 = "33abs";
console.log("score2 is of type: " + typeof score2);

console.log("score is of type after converting is " + typeof Number(score2));

console.log(Number(score2));

const n1 = 1;
console.log("converting n1 to boolean " + Boolean(n1));

const n2 = 0;
console.log("converting n2 to boolean " + Boolean(n2));

const s1 = "";
console.log("converting s1 to boolean " + Boolean(s1));

const s2 = "Abhinav";
console.log("converting s2 to boolean " + Boolean(s2));

console.log("Converting int to string" + typeof String(33));
