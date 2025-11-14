understanding JavaScript data types is core to writing solid code, because JS is dynamically typed (types are determined at runtime).

Let’s go step by step.

⸻

🧩 JavaScript Data Types Overview

JavaScript has 8 main data types (as per ECMAScript standards):

Category Data Type Description
Primitive Types Number Represents all numbers (integers, floats, NaN, ±Infinity)
BigInt Represents integers larger than what Number can safely store
String Sequence of characters (text)
Boolean Logical values: true or false
Undefined A variable declared but not assigned a value
Null Represents “no value” or “empty value” intentionally
Symbol Unique and immutable value, often used as object property keys
Non-Primitive (Reference) Type Object Collection of key–value pairs; includes arrays, functions, dates, etc.

⸻

⚙️ Primitive vs Non-Primitive

Feature Primitive Non-Primitive
Stored by value by reference
Mutable? Immutable (cannot be changed directly) Mutable
Examples number, string, boolean object, array, function

Example:

let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (primitives are copied by value)

let obj1 = { x: 10 };
let obj2 = obj1;
obj2.x = 20;
console.log(obj1.x); // 20 (objects are copied by reference)

⸻

🧮 1. Number
• Includes both integers and floats.
• Uses 64-bit floating-point format (IEEE 754).
• Special values: NaN, Infinity, -Infinity.

let x = 42;
let y = 3.14;
let z = NaN;

⸻

🔢 2. BigInt
• For integers larger than Number.MAX_SAFE_INTEGER (≈ 9 × 10¹⁵).
• Denoted with an n at the end.

let big = 9007199254740991n;
let bigger = big + 10n;

⚠️ You cannot mix BigInt and Number in arithmetic directly.

⸻

📝 3. String
• Sequence of characters, enclosed in ', ", or ` (template literals).

let s1 = "Hello";
let s2 = 'World';
let s3 = `${s1} ${s2}`; // template literal

⸻

✅ 4. Boolean
• True or false values.

let isLoggedIn = true;
let isCompleted = false;

⸻

❓ 5. Undefined
• Automatically assigned to variables that have been declared but not assigned.

let a;
console.log(a); // undefined

⸻

🚫 6. Null
• Represents a deliberate “no value”.

let b = null;

⚠️ typeof null is "object" — this is a historical bug in JS.

⸻

🔑 7. Symbol
• Introduced in ES6.
• Each Symbol is unique — even if they have the same description.
• Commonly used as unique object property keys.

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // false

⸻

🧱 8. Object (non-primitive)

Everything that’s not a primitive type is an object — arrays, functions, dates, etc.

Examples:

let person = { name: "Alice", age: 25 };
let arr = [1, 2, 3];
let func = function() { console.log("Hi"); };
let date = new Date();

⸻

🧠 typeof Operator

To check data types in JavaScript:

typeof 123 // "number"
typeof "abc" // "string"
typeof true // "boolean"
typeof undefined // "undefined"
typeof null // "object" (quirk)
typeof Symbol() // "symbol"
typeof {a:1} // "object"
typeof function(){} // "function" (special case, still object)

⸻

⚡ Summary (Cheat Sheet)

Type Example typeof result
Number 42 "number"
BigInt 42n "bigint"
String "hello" "string"
Boolean true "boolean"
Undefined undefined "undefined"
Null null "object" (bug)
Symbol Symbol("x") "symbol"
Object {} "object"
Function function() {} "function"
