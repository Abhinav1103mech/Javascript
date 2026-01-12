A **callback** in JavaScript is simply a **function that is passed as an argument to another function**, and is executed later, typically after some task has been completed.

They are fundamental to JavaScript, especially for **asynchronous operations** (like fetching data, timers, etc.) but are also used for **synchronous operations** (like array methods).

---

## 💡 Key Concepts

1.  **Passing the Function:** You define a function (the callback) and pass its name (without parentheses) into another function.
2.  **Execution Later:** The outer function's code will call or "callback" the function you passed in when it needs to.
3.  **Asynchronous Use:** This is where they are most common. For tasks that take time, like fetching data from a server, you don't want your program to stop and wait. You provide a callback to run _once_ the data has arrived.

---

## 🛠️ Example 1: Synchronous Callback

This example shows a simple, immediate use of a callback.

```javascript
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  // Execute the callback function
  callback();
}

// The function we want to pass as a callback
function sayGoodbye() {
  console.log("...and goodbye!");
}

// Pass sayGoodbye as an argument to greet
greet("Alice", sayGoodbye);

// Output:
// Hello, Alice!
// ...and goodbye!
```

---

## ⏳ Example 2: Asynchronous Callback

This is a more practical use, often seen with functions like `setTimeout` (which simulates a time-consuming operation).

```javascript
function loadData(callback) {
  console.log("Starting to load data...");

  // Simulate an async operation that takes 2 seconds
  setTimeout(function () {
    const data = { message: "Data successfully loaded!" };
    console.log("Async task complete.");
    // Call the callback function and pass the result (data)
    callback(data);
  }, 2000); // 2000 milliseconds = 2 seconds
}

function processResult(result) {
  console.log("Processing the result now...");
  console.log(`Received: ${result.message}`);
}

// Start the operation, giving it the function to run after 2s
loadData(processResult);

console.log(
  "This line runs immediately, without waiting for the data to load."
);
```

**Execution Order:**

1.  "Starting to load data..."
2.  "This line runs immediately..."
3.  _(2-second wait)_
4.  "Async task complete."
5.  "Processing the result now..."
6.  "Received: Data successfully loaded\!"

---

## 🛑 Callback Hell (The Problem)

When you have many nested asynchronous operations that depend on the results of the previous one, you can end up with deeply indented, hard-to-read code known as **Callback Hell** or the **Pyramid of Doom**.

### A Simple Example of Callback Hell:

```javascript
// Don't write code like this!
firstOperation(function (result1) {
  secondOperation(result1, function (result2) {
    thirdOperation(result2, function (result3) {
      // ...and so on
      finalOperation(result3);
    });
  });
});
```

### The Solution:

Modern JavaScript primarily uses **Promises** and **Async/Await** to handle asynchronous code in a cleaner, more readable way, avoiding callback hell.

---

## 🗺️ Array Callbacks (High-Order Functions)

A very common use of callbacks in everyday JavaScript is with **Array methods** like `map`, `filter`, and `forEach`. These methods accept a function (the callback) to be executed on every item of the array.

```javascript
const numbers = [1, 2, 3, 4, 5];

// The callback function is passed to map
const doubled = numbers.map(function (number) {
  // numbers.map(number => number*2)
  return number * 2;
});

console.log(doubled); // Output: [2, 4, 6, 8, 10]
```

That's a great choice\! **Promises** are the modern, cleaner way to handle asynchronous operations in JavaScript and are designed specifically to solve the problems of **Callback Hell**.

## 🤝 What is a Promise?

A Promise is an object representing the **eventual completion (or failure) of an asynchronous operation** and its resulting value.

Think of a Promise like ordering food at a restaurant:

1.  **You place the order (start the async operation).** You don't wait by the kitchen door; you go back to your table.
2.  **The waiter gives you a ticket (the Promise object).** You are _promised_ that eventually, you'll get food or a notification that they ran out of ingredients.
3.  **The Promise is initially 'Pending'.**
4.  **Eventually, one of two things happens:**
    - **The food arrives (the Promise is 'Fulfilled' or 'Resolved').** You have the result.
    - **The waiter tells you they're out (the Promise is 'Rejected').** This is the error.

---

## 🚦 Promise States

A Promise object can be in one of three mutually exclusive states:

| State                    | Description                                                                    | Outcome                  |
| :----------------------- | :----------------------------------------------------------------------------- | :----------------------- |
| **Pending**              | Initial state. The asynchronous operation has started but hasn't finished yet. | Waiting...               |
| **Fulfilled / Resolved** | The operation completed **successfully**.                                      | `value` available        |
| **Rejected**             | The operation **failed** (an error occurred).                                  | `error` reason available |

---

## 🏗️ Creating and Using Promises

Instead of passing a callback function, you call methods on the Promise object itself. The two most important methods are `.then()` and `.catch()`.

### 1\. Creating a Promise

A Promise is created using the `new Promise()` constructor, which takes a single function (called the **executor**) with two arguments: `resolve` and `reject`.

```javascript
const myPromise = new Promise((resolve, reject) => {
  const isSuccessful = Math.random() > 0.5; // Simulate success/failure

  setTimeout(() => {
    if (isSuccessful) {
      // Success: Call resolve() with the result
      resolve("Data fetched successfully!");
    } else {
      // Failure: Call reject() with the error reason
      reject("Network error: Failed to fetch data.");
    }
  }, 1500); // Wait 1.5 seconds
});
```

### 2\. Consuming (Using) a Promise

You attach handlers to the Promise using `.then()` and `.catch()`:

- `.then(onFulfilled)`: Takes a function to run if the Promise is **Fulfilled**.
- `.catch(onRejected)`: Takes a function to run if the Promise is **Rejected**.

<!-- end list -->

```javascript
myPromise
  .then((result) => {
    // This runs only if resolve() was called
    console.log(`Success! Result: ${result}`);
  })
  .catch((error) => {
    // This runs only if reject() was called
    console.error(`Failure! Error: ${error}`);
  })
  .finally(() => {
    // This runs always, regardless of success or failure
    console.log("Operation complete (Cleanup or UI hiding).");
  });
```

---

## ⛓️ Promise Chaining (Solving Callback Hell)

The real power of Promises is that the `.then()` method **always returns a new Promise**, which allows you to chain multiple asynchronous operations sequentially without nesting.

```javascript
function step1() {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("Step 1 done.");
      resolve(10); // Pass a value to the next .then()
    }, 1000)
  );
}

function step2(valueFromStep1) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("Step 2 done.");
      resolve(valueFromStep1 * 2);
    }, 500)
  );
}

// Chaining:
step1() // Start the first Promise
  .then((result1) => {
    // result1 is 10
    console.log(`Intermediate result: ${result1}`);
    return step2(result1); // Return a new Promise for chaining
  })
  .then((finalResult) => {
    // finalResult is 20
    console.log(`Final result: ${finalResult}`);
  })
  .catch((error) => {
    // A single catch block handles errors in any step of the chain
    console.error("An error occurred in the chain:", error);
  });
```

This structure is flat and readable, directly avoiding the deep indentation of Callback Hell.

---

In the context of Playwright (and Node.js in general), you'll almost always see Promise handling done using **`async/await`**. Playwright's core methods (like `page.goto()`, `page.click()`, `page.waitForSelector()`) **return Promises**.

Here is how Promises work with Playwright, leveraging the modern `async/await` syntax:

---

## 🎭 Promises in Playwright with `async/await`

The entire structure of a Playwright test function is typically wrapped in an `async` function, allowing you to use the `await` keyword inside.

### 1\. The `async` Keyword

When you define a function with `async`, you signal that this function will perform asynchronous operations and will **implicitly return a Promise**.

```javascript
// The outer function returns a Promise
async function runPlaywrightScript() {
  // ... code here ...
}
```

### 2\. The `await` Keyword (The Promise Resolver)

When you use `await` before a function call (like `page.goto()`), you are telling the JavaScript runtime:

> "This function call is returning a **Promise**. Please **pause** the execution of the current `async` function until that Promise is **Resolved** (fulfilled) or **Rejected** (failed). Once it is resolved, give me the result and continue."

**Example:**

```javascript
// This line returns a Promise.
const promiseFromNavigation = page.goto("https://playwright.dev");

// Using 'await' pauses the script until the navigation Promise resolves.
await page.goto("https://playwright.dev");
```

---

## 🚀 Playwright Example: Promise Flow

Let's look at a sequence of Playwright actions and how the `await` keyword manages the underlying Promises.

```javascript
// Assume 'page' object is already instantiated
(async () => {
  try {
    // 1. page.goto() returns a Promise. Execution awaits its resolution.
    // It resolves when the page is fully loaded.
    console.log("Starting navigation...");
    await page.goto("https://www.example.com");
    console.log("Navigation successful (Promise 1 resolved).");

    // 2. page.locator().click() returns a Promise. Execution awaits its resolution.
    // It resolves when the click action is confirmed.
    console.log("Attempting to click button...");
    await page.locator("#my-button").click();
    console.log("Button click successful (Promise 2 resolved).");

    // 3. page.textContent() returns a Promise with the element's text.
    // The await keyword resolves the Promise and assigns the text to the variable.
    console.log("Fetching element text...");
    const headerText = await page.locator("h1").textContent();
    console.log(`Header Text: ${headerText} (Promise 3 resolved).`);
  } catch (error) {
    // 4. If any of the Promises (navigation, click, or text content) reject,
    // the execution jumps here immediately.
    console.error(
      "A Playwright operation failed (Promise was Rejected):",
      error
    );
  }
})();
```

### Flow of Control:

1.  The `await` at line 1 **freezes** the `try` block until navigation is complete.
2.  Once resolved, the script moves to line 2.
3.  The `await` at line 2 **freezes** the script until the click is done.
4.  Once resolved, the script moves to line 3.
5.  If any operation fails (e.g., the URL is wrong, the selector is not found), the corresponding Promise is **Rejected**, and JavaScript immediately jumps to the **`catch` block** to handle the error.

---

## 🚫 Why Not Use `.then()` in Playwright?

While you _could_ technically use `.then()`, it leads back to the nested, less readable structure:

```javascript
// Avoid this style in modern Playwright/Node.js code!
page
  .goto("url")
  .then(() => {
    return page.locator("selector").click();
  })
  .then(() => {
    return page.locator("h1").textContent();
  })
  .then((headerText) => {
    console.log(headerText);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
```

As you can see, the `async/await` version is much cleaner and reads like **synchronous code**, which is the main goal of using it—to make handling Promises easier\!

Would you like to try writing a small, complete Playwright script using `async/await` based on this structure?
