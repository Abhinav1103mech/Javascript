Yes, let's cover **Hoisting** now. This is a crucial concept in JavaScript and one of the biggest differences from languages like Java.

## Hoisting: Function Declarations vs. Expressions

**Hoisting** is JavaScript's default behavior of moving **declarations** to the top of their current scope (like the top of a file or a function) during the compilation phase.

Think of it as the browser's JavaScript engine scanning the code and moving all the definitions before it starts executing the code line-by-line.

---

### 1\. Function Declarations (Fully Hoisted)

A **Function Declaration** (using the `function` keyword as a standalone statement) is **fully hoisted**. This means the entire function—both its name and its body—is available before the engine reaches the line where the function is defined.

This allows you to call a function _before_ its declaration in the code:

```javascript
// Function Declaration Example (This works!)
// The function is called BEFORE it is defined.
console.log(greet("Alice")); // Output: "Hello, Alice!"

function greet(name) {
  return "Hello, " + name + "!";
}
```

---

### 2\. Function Expressions (Partially Hoisted)

A **Function Expression** (which includes **Arrow Functions**) is only **partially hoisted**.

- The **variable** declaration (`const`, `let`, or `var`) is hoisted.
- The **value assignment** (the function itself) is **not** hoisted.

If you try to call a function expression before the line where it is assigned, you will get an error because the variable exists, but it doesn't hold the function value yet.

```javascript
// Function Expression Example (This causes an error!)

// console.log(multiply(2, 4)); // <-- ERROR: Cannot access 'multiply' before initialization

const multiply = (num1, num2) => {
  return num1 * num2;
};
```

---

This difference is why many developers prefer **Function Expressions** for modern code, as it enforces the rule that you must define something before you use it, making the behavior more predictable.
