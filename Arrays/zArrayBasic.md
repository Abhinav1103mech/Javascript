JavaScript Arrays

📌 What is an Array?

An Array in JavaScript is an ordered, iterable list-like object used to store multiple values under a single variable.
Arrays can hold any data type — numbers, strings, objects, functions, even other arrays (nested arrays).

Example

let arr = [1, "hello", true, {a: 1}, [10, 20]];

⸻

📁 Array Characteristics
• Indexed starting from 0
• Dynamic (size grows/shrinks automatically)
• Heterogeneous (mixed data types allowed)
• Stored as reference type
• Array length can change even if declared with const

⸻

🏗️ Creating Arrays

1. Array Literal (recommended)

let arr = [10, 20, 30];

2. Using new Array()

let arr = new Array(3); // creates empty array with length 3
let arr2 = new Array(1,2,3);

3. Using Array.of()

let arr = Array.of(1, 2, 3);

4. Using Array.from() ---> imp

let arr = Array.from("hello"); // ['h','e','l','l','o']

⸻

🔍 Accessing & Modifying Elements

arr[0]; // access
arr[2] = 100; // modify
arr.length; // length of array

⸻

📚 Array Methods (Complete Reference)

Below are the methods grouped by purpose, each with examples.

⸻

1️⃣ Add / Remove Elements

push()

Adds at the end, returns new length.

## arr.push(10);

pop()

Removes from end, returns removed value.

## arr.pop();

unshift()

Adds at the start, returns new length.

## arr.unshift(5);

shift()

Removes from start, returns removed value.

## arr.shift();

let arr = [1,2,3,4,5]
splice()

Add/Remove anywhere in array.

arr.splice(start, deleteCount, item1, item2);

Example:

arr.splice(1, 3); // remove 3 items from index 1 --> [2,3,4]
log(arr) --> [1,4,5] --> original array also got changed in splice

arr.splice(1, 0, "x"); // insert 'x' at index 1

---

let arr = [1,2,3,4,5]
slice()

Returns part of array (non-mutating).

arr.slice(1, 3); --> [2,3,4]
log(arr) --> [1,2,3,4,5]

---

2️⃣ Searching in Arrays

includes()

## arr.includes(10);

indexOf()

## arr.indexOf("hi");

lastIndexOf()

## arr.lastIndexOf(5);

find()

Returns first matching element.

arr.find(x => x > 10);

findIndex()

arr.findIndex(x => x > 10);

⸻

3️⃣ Array Iteration Methods

forEach()

## arr.forEach(item => console.log(item));

---

map()

Returns new array with transformed values.

## let doubled = arr.map(x => x \* 2);

---

filter()

Returns new array with elements that pass condition.

## let evens = arr.filter(x => x % 2 === 0);

---

reduce()

Reduces array to a single value.

## let sum = arr.reduce((a, b) => a + b, 0); //0 here showing initial value

---

reduceRight()

## Same as reduce but from right.

some()

Returns true if any element passes the test.

## arr.some(x => x > 10);

every()

Returns true if all elements pass.

arr.every(x => x % 2 === 0);

⸻

4️⃣ Sorting & Reversing

sort()

arr.sort((a, b) => a - b);

reverse()

arr.reverse();

⸻

5️⃣ Creating New Arrays

concat()

let c = arr1.concat(arr2);

flat()

Flattens nested arrays.

arr.flat(2); // depth 2

flatMap()

Map then flatten.

arr.flatMap(x => [x, x*2]);

---

join()

Converts array to string. let myArr = [1,2,3,'Abhi']
myarr.join() --> 1,2,3,'Abhi' --> typeOf myArr.join() --> String
arr.join(", ");

⸻

6️⃣ Conversions

toString()

arr.toString();

JSON.stringify()

JSON.stringify(arr);

⸻

7️⃣ Checking Array Type

Array.isArray()

Array.isArray(arr);

⸻

8️⃣ Spread & Rest Operators

Spread into new array

let copy = [...arr];

Rest parameters

function sum(...nums) {}

⸻

9️⃣ Destructuring Arrays

let [a, b, c] = [10, 20, 30];

Skipping:

let [,,third] = arr;

With default:

let [x = 5] = [];

⸻

🔟 Multi-dimensional Arrays (Matrix)

let matrix = [
[1,2,3],
[4,5,6]
];

matrix[1][2]; // 6

⸻

🧠 Important Properties

length

arr.length = 0; // clears the array

constructor

Returns the constructor function.

⸻

⚠️ Common Pitfalls
• typeof [] → "object" (use Array.isArray)
• Sparse arrays (skipped indexes) behave inconsistently
• sort() converts values to strings if no comparator is given

⸻
