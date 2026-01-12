Here’s a clear, deep, easy-to-understand explanation of this in JavaScript, written in a way that’s perfect for your learning flow and .md notes.

⸻

🔥 this Keyword in JavaScript — The Complete Guide

JavaScript’s this is NOT like Java’s this.

In Java:
👉 this always refers to current object.

In JavaScript:
👉 this depends on HOW a function is called, not where it is defined.

This is the biggest point.

⸻

⭐ 1. Global this

In Browser

console.log(this);

Output:

window // the global object

In Node.js

console.log(this);

Output:

{} // empty module object

⸻

⭐ 2. this Inside a Function (VERY IMPORTANT)

Case: Regular function, non-strict mode

function test() {
console.log(this);
}
test();

Output:

window (in browser)
globalThis (in modern JS)

Case: Regular function, strict mode

"use strict";
function test() {
console.log(this);
}
test();

Output:

undefined

⸻

⭐ 3. this Inside Methods (MOST COMMON USE)

When you call a function as a property of an object, this becomes that object.

const user = {
name: "Abhinav",
greet() {
console.log(this.name);
}
};

user.greet(); // Abhinav

👉 Because user.greet() is called via user object.

⸻

⭐ 4. Losing this (Trickiest JS Behavior)

Consider:

const user = {
name: "Abhinav",
greet() {
console.log(this.name);
}
};

const ref = user.greet;
ref(); // Undefined!!

Why?

Because ref is now a regular function call, not obj.method()
So this → global object (or undefined in strict mode).

⸻

⭐ 5. Fixing this using bind()

const user = {
name: "Abhinav",
greet() { console.log(this.name); }
};

const ref = user.greet.bind(user);

ref(); // Abhinav

bind() permanently attaches this to a function.

⸻

⭐ 6. Arrow Functions and this (VERY IMPORTANT)

Arrow functions do NOT have their own this.

They take this from the surrounding lexical scope.

Example:

const user = {
name: "Abhinav",
greet: () => {
console.log(this.name);
}
};

user.greet(); // undefined

Because arrow functions do not bind this.

⸻

So when should you use arrow functions?

✔ Callbacks
✔ Array methods (map, filter, reduce)
✔ Functional programming

❌ Methods in an object
❌ Constructors

Always use normal functions inside objects if you need this.

⸻

⭐ 7. this Inside Constructor Functions

function Person(name) {
this.name = name;
}

const p = new Person("Abhinav");
console.log(p.name); // Abhinav

new creates a new object → assigns it to this.

⸻

⭐ 8. this Inside Classes

Same as constructors:

class Person {
constructor(name) {
this.name = name;
}
greet() {
console.log(this.name);
}
}

new Person("Abhinav").greet(); // Abhinav

⸻

⭐ 9. call(), apply(), bind() — Manual this Control

call()

function show() { console.log(this.name); }
show.call({ name: "Abhinav" });

apply()

Same as call but arguments in array.

bind()

Creates a new function with fixed this.

⸻

⭐ 10. this Summary Table

Context Value of this
Global (browser) window
Regular function (non-strict) window/globalThis
Regular function (strict) undefined
Method inside object that object
Constructor new created object
Arrow function inherits from parent scope
Event handler element that fired the event
call/apply/bind manually assigned

⸻

⭐ 11. The MOST Important Rule

Arrow functions → lexical this
Normal functions → dynamic this
