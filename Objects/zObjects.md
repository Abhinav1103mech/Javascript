Below is a clean, structured, MD-friendly explanation of JavaScript Objects, similar to the Arrays/String notes you requested earlier.
You can directly copy this into your .md file.

⸻

JavaScript Objects

📌 What is an Object?

A JavaScript Object is a collection of key–value pairs.
• Keys are called properties
• Values can be any type: number, string, boolean, function, array, another object, etc.
• Objects are reference types.

Example

const user = {
name: "Abhinav",
age: 25,
isAdmin: false
};

⸻

📁 Why Objects?
• Store structured data
• Group related variables/functions
• Used heavily in JS frameworks, APIs, real-world apps
• Foundation for OOP in JavaScript

⸻

📌 Ways to Create Objects

1. Object Literal (recommended)

const obj = {
key1: "value1",
key2: 20
};

2. Using new Object()

const obj = new Object();
obj.name = "Abhinav";

3. Constructor Function

function Person(name, age) {
this.name = name;
this.age = age;
}

const p1 = new Person("Abhinav", 25);

4. Class (ES6)

class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}
}

5. Object.create()

Creates object with a specific prototype.

const proto = { greet() { console.log("Hello"); } };
const obj = Object.create(proto);

⸻

📌 Accessing Object Properties

1. Dot Notation

obj.name;

2. Bracket Notation

obj["name"];
obj["first-name"]; // for keys with spaces or symbols

⸻

📌 Modifying Properties

Add new property

obj.city = "Delhi";

Update property

obj.name = "Abhinav Gupta";

Delete property

delete obj.age;

⸻

📌 Methods (Functions inside Objects)

const user = {
name: "Abhinav",
greet() {
console.log("Hello");
}
};
user.greet();

⸻

📌 Nested Objects

const user = {
name: "Abhinav",
address: {
city: "Delhi",
pincode: 110001
}
};

console.log(user.address.city);

⸻

📌 Looping Through an Object

1. for…in

Iterates over keys.

for (let key in obj) {
console.log(key, obj[key]);
}

2. Object.keys()

Returns an array of keys.

Object.keys(obj);

3. Object.values()

Returns an array of values.

Object.values(obj);

4. Object.entries()

Returns array of [key, value] pairs.

Object.entries(obj);

⸻

📌 Useful Object Methods (Detailed)

Object.assign()

Copies properties from one object to another.

let newObj = Object.assign({}, obj);

Object.freeze()

Prevents any changes.

Object.freeze(obj);

Object.seal()

Prevents adding/removing properties but allows modification.

Object.seal(obj);

Object.hasOwn() / hasOwnProperty()

Checks if property exists directly on the object.

obj.hasOwnProperty("name");
Object.hasOwn(obj, "age");

Object.create()

Creates new object using prototype.

⸻

📌 Spread & Rest with Objects

Spread

let copy = { ...obj };

Merge objects

let merged = { ...obj1, ...obj2 };

Rest

const { name, ...rest } = obj;

⸻

📌 Object Destructuring

Extracting properties:

const { name, age } = user;

With defaults:

const { city = "Unknown" } = user;

Rename properties:

const { name: fullName } = user;

Nested destructuring:

const user = {
name: "Abhinav",
address: { city: "Delhi" }
};

const { address: { city } } = user;

⸻

📌 Computed Property Names

let key = "score";
let obj = {
[key]: 100
};

⸻

📌 Optional Chaining

Safely access nested properties.

user.address?.city;

⸻

📌 JSON and Objects

Object → JSON

JSON.stringify(obj);

JSON → Object

JSON.parse(jsonString);

⸻

📌 Object Comparison

Objects are compared by reference, not value.

{} === {} // false

To deeply compare, you must check each property.

⸻

📌 Prototypes & Inheritance (High-Level)
• Every object has a hidden internal property: [[Prototype]]
• Accessible via Object.getPrototypeOf(obj)
• Functions/classes define prototype methods

Example:

Person.prototype.sayHi = function() {
console.log("Hi");
};

⸻

⚠️ Common Pitfalls
• typeof null returns "object" (bug in JS)
• Objects are copied by reference, not value
• Mutating nested properties affects original object
• Bracket notation required for dynamic keys

⸻

🎯 Summary

JavaScript Objects are:
• Key–value data structures
• Dynamic
• Powerful & flexible
• Base of OOP, JSON, DOM, API data

⸻

Here are the Beginner + Intermediate level answers for the JavaScript Object Interview Questions.

⸻

🟢 Beginner Level – Answers

1. What is an object in JavaScript?

An object is a collection of key–value pairs where keys are strings/symbols and values can be any type (string, number, array, function, another object).

⸻

2. How do you create an object in JavaScript?

Four common ways:

const obj1 = { a: 1 };
const obj2 = new Object();
const obj3 = Object.create(proto);
function Person() { this.name = "Abhinav"; }

⸻

3. How to access object properties?

obj.name; // dot notation
obj["name"]; // bracket notation (for dynamic keys)

⸻

4. How do you delete a property from an object?

delete obj.age;

⸻

5. Difference between in and hasOwnProperty()?

Feature in hasOwnProperty()
Checks own + inherited ✔ Yes ❌ No (only own properties)
Example "toString" in obj → true obj.hasOwnProperty("toString") → false

⸻

6. Why is typeof null "object"?

It’s a historic bug in JavaScript.
The value null was tagged as an object in the early implementation.

⸻

7. How do you loop through an object?

for (let key in obj) {} // keys
Object.keys(obj); // array of keys
Object.values(obj); // array of values
Object.entries(obj); // array of [key, value]

⸻

8. What is a method in an object?

A method is a function stored as a property of an object.

const obj = {
greet() { console.log("Hi"); }
};

⸻

9. How do you check if a key exists in an object?

"age" in obj;
obj.hasOwnProperty("age");
Object.hasOwn(obj, "age");

⸻

10. How do you merge two objects?

const merged = { ...obj1, ...obj2 };

or

Object.assign({}, obj1, obj2);

⸻

⸻

🟡 Intermediate Level – Answers

11. What are getters and setters?

Used to control access to object properties.

const obj = {
\_name: "Abhinav",
get name() { return this.\_name; },
set name(val) { this.\_name = val.toUpperCase(); }
};

⸻

12. What is object destructuring?

Extracting values from objects into variables.

const { name, age } = user;

Nested:

const { address: { city } } = user;

⸻

13. What is a computed property name?

Dynamically assigning a key using an expression:

let key = "score";
const obj = {
[key]: 100
};

⸻

14. Difference between Object.seal() and Object.freeze()?

Feature seal() freeze()
Add property ❌ No ❌ No
Delete property ❌ No ❌ No
Modify property value ✔ Yes ❌ No
Modify property attributes ❌ No ❌ No

⸻

15. Difference between == and === for objects?

Both compare references, not values.
Two objects are equal only if they reference the same memory location.

{} === {} // false

⸻

16. What does it mean that objects are reference types?

Variables store references (memory addresses), not the value itself.

let a = { x: 1 };
let b = a; // both point to same object

⸻

17. How do you clone an object?

Shallow clone:

const copy = { ...obj };
const copy2 = Object.assign({}, obj);

Deep clone (simple):

const deep = JSON.parse(JSON.stringify(obj));

⸻

18. What are enumerable and non-enumerable properties?

Enumerable: property appears in loops (for...in, Object.keys()).

Non-enumerable: hidden from enumeration.

Created using:

Object.defineProperty(obj, "id", {
value: 10,
enumerable: false
});

⸻

19. What is Object.defineProperty() used for?

To create or modify a property with detailed configuration:

Object.defineProperty(obj, "name", {
value: "Abhinav",
writable: false,
enumerable: true,
configurable: false
});

⸻

20. Explain Object.keys(), Object.values(), Object.entries().

Method Returns
Object.keys() Array of keys
Object.values() Array of values
Object.entries() Array of [key, value] pairs

⸻

21. Difference: dot notation vs bracket notation?

Dot Notation Bracket Notation
Only simple identifiers Can use dynamic values
Example: obj.name Example: obj["first-name"]
Faster & readable Needed for spaces, symbols, numbers

⸻

22. How does JSON relate to objects?

JSON is a string format based on JS objects.

Convert object → JSON:

JSON.stringify(obj);

Convert JSON → object:

JSON.parse(jsonStr);

⸻

23. What are accessor vs data properties?

Type Description
Data property Stores actual value
Accessor property Uses getter/setter methods

Example:

// Data property
obj.age = 25;

// Accessor property
get age() {}
set age(value) {}

⸻

24. Difference between Object.assign() and spread operator {...obj}?

Feature Spread {...obj} Object.assign()
Syntax Cleaner Verbose
Cloning Yes Yes
Merge multiple objects Yes Yes
Copies property descriptors ❌ No ✔ Yes

⸻

25. What is the purpose of Object.fromEntries()?

Converts key-value pairs back into an object.

Object.fromEntries([["name", "Abhinav"], ["age", 25]]);

⸻
