Below is a clean, well-structured, Markdown-ready documentation covering JavaScript Strings and all important String methods.
You can directly paste this into your .md file.

⸻

📌 JavaScript Strings — Complete Guide

🔷 1. What is a String?

A string in JavaScript is a sequence of Unicode characters.
It is a primitive data type and immutable (cannot be changed after creation).

Examples:

let s1 = "Hello";
let s2 = 'World';
let s3 = `Template Literal`;

⸻

🔷 2. Creating Strings

Using string literals

let str = "Hello JS";

Using the String constructor

(Not recommended unless you need a wrapper object)

let str = new String("Hello JS");
typeof str; // "object"

⸻

🔷 3. String Immutability

Strings cannot be changed once created.

let s = "cat";
s[0] = "b"; // ❌ no change
console.log(s); // "cat"

Any “modification” creates a new string.

⸻

🔷 4. Template Literals (ES6+)

Enclosed by backticks: ` `
Support:
✔ Expression interpolation
✔ Multi-line strings
✔ Tagged templates

let name = "Abhinav";
let greet = `Hello ${name}!`;

⸻

🔷 5. Escape Characters

Escape Meaning
\' single quote
\" double quote
\\ backslash
\n new line
\t tab
\r carriage return

⸻

📌 6. String Properties

length

Returns the number of characters.

"Hello".length // 5

⸻

📌 7. String Methods (Complete Reference)

Below are all important string methods grouped logically.

⸻

🔶 A. Accessing Characters

charAt(index)

Returns character at index.

"hello".charAt(1); // "e"

charCodeAt(index)

Returns UTF-16 code.

"ABC".charCodeAt(0); // 65

at(index) (ES2022)

Supports negative indexing.

"hello".at(-1); // "o"

[] (Bracket notation)

"hi"[0]; // "h"

⸻

🔶 B. Searching Strings

indexOf(search[, fromIndex])

"hello".indexOf("l"); // 2

lastIndexOf(search[, fromIndex])

"hello".lastIndexOf("l"); // 3

includes(search[, fromIndex])

"hello".includes("he"); // true

startsWith(search[, length])

"hello".startsWith("he"); // true

endsWith(search[, length])

"hello".endsWith("lo"); // true

search(regex)

Uses a regular expression.

"ab12".search(/\d/); // 2

⸻

🔶 C. Extracting Substrings

slice(start, end)

Supports negative indexes.

"abcdef".slice(1, 4); // "bcd"
"abcdef".slice(-3); // "def"

substring(start, end)

Does not support negative indexes.

"abcdef".substring(1, 4); // "bcd"

substr(start, length) (deprecated)

⸻

🔶 D. Modifying / Transforming Strings

toUpperCase()

"hello".toUpperCase(); // "HELLO"

toLowerCase()

"HELLO".toLowerCase(); // "hello"

trim(), trimStart(), trimEnd()

" hi ".trim(); // "hi"

repeat(n)

"ha".repeat(3); // "hahaha"

padStart(targetLength, padStr)

"5".padStart(3, "0"); // "005"

padEnd(targetLength, padStr)

"5".padEnd(3, "\*"); // "5\*\*"

replace(searchValue, newValue)

Replaces first match.

"hi hi".replace("hi", "hello"); // "hello hi"

replaceAll(searchValue, newValue)

"hi hi".replaceAll("hi", "hello");

toString(), valueOf()

Used in implicit conversion.

⸻

🔶 E. Splitting & Joining

split(separator, limit)

"1,2,3".split(","); // ["1","2","3"]

⸻

🔶 F. String Comparison

localeCompare()

"apple".localeCompare("banana"); // -1

⸻

🔶 G. Regex-Based Methods

match(regex)

Returns array or null.

"abc123".match(/\d+/); // ["123"]

matchAll(regex) (returns iterator)

[... "abc12345".matchAll(/\d/g)];

replace / replaceAll

(Already covered)

⸻

🔶 H. Raw Strings (Template Literal)

String.rawtext

String.raw`Line1\nLine2`;
// "Line1\\nLine2"

⸻

📌 8. Converting Other Types to Strings

Explicit:

String(123); // "123"
(123).toString(); // "123"

Implicit:

"hello " + 123; // "hello 123"
123 + ""; // "123"

⸻

📌 9. Unicode & UTF-16 Details

Characters beyond U+FFFF need surrogate pairs:

"😊".length // 2 (because UTF-16)

Use:

Array.from("😊").length // 1

⸻

📌 10. String Iteration

Using for ... of

for (let ch of "Hi😊") {
console.log(ch); // H, i, 😊
}

⸻

📌 11. Common Interview Tricks

"5" + 1 // "51"
"5" - 1 // 4
[] + [] // ""
[] + {} // "[object Object]"

These involve coercion.

⸻

📌 12. Best Practices

✔ Prefer template literals
✔ Use slice() instead of substring()
✔ Use replaceAll for multiple replacements
✔ Avoid substr() (deprecated)
✔ Use charAt() or at() for safe indexing
✔ Avoid new String() (boxed object)

⸻

📌 13. Complete Summary Table

Category Methods
Check length, includes, startsWith, endsWith, indexOf, lastIndexOf, search
Extract slice, substring, substr (deprecated)
Transform toUpperCase, toLowerCase, trim, trimStart, trimEnd, repeat, replace, replaceAll, padStart, padEnd
Regex match, matchAll, replace, replaceAll, search
Convert toString, valueOf, String()
Split split
Access charAt, charCodeAt, at, []

⸻
