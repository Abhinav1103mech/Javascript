/*

In JavaScript, comparing data types can be tricky because the language has two different equality operators: **Strict Equality (`===`)** and **Loose/Abstract Equality (`==`)**.

The one you should almost always use is **Strict Equality (`===`)**.

-----

### 🚀 Strict Equality (`===`)

This is the "Strict Equality" or "Identity" operator. It's the most straightforward and recommended operator.

  * **Rule:** Checks both **value** AND **type**.
  * **Type Coercion:** Does **not** perform any type conversion. If the types are different, it immediately returns `false`.

**Examples:**

```javascript
5 === 5       // true (same number, same type)
5 === '5'     // false (different types: Number vs. String)
true === 1    // false (different types: Boolean vs. Number)
null === null   // true (only one null value exists)
null === undefined // false (different types)
```

> **Best Practice:** Use `===` by default. It's predictable and helps avoid common bugs related to type coercion.

-----

### ⚠️ Loose Equality (`==`)

This is the "Loose Equality" or "Abstract Equality" operator. It's known for causing confusing behavior if you're not careful.

  * **Rule:** Checks only the **value** after attempting to **convert** the operands to the same type (this is called "type coercion").
  * **Type Coercion:** If the types are different, JavaScript will try to "help" by converting one or both values before comparing.

**Examples (The "Gotchas"):**

```javascript
5 == '5'      // true (String '5' is coerced to Number 5)
true == 1     // true (Boolean true is coerced to Number 1)
false == 0    // true (Boolean false is coerced to Number 0)
'0' == false  // true (false -> 0, '0' -> 0. Now 0 == 0)
null == undefined // true (This is a special case in the spec)
```

-----

### Comparison Quick Reference

This table shows some of the most common (and confusing) comparisons:

| Expression | `==` (Loose) | `===` (Strict) | Reason |
| :--- | :---: | :---: | :--- |
| `5 == '5'` | **true** | **false** | `==` coerces string to number. |
| `1 == true` | **true** | **false** | `==` coerces boolean to number (1). |
| `0 == false` | **true** | **false** | `==` coerces boolean to number (0). |
| `0 == ''` | **true** | **false** | `==` coerces empty string to number (0). |
| `null == undefined` | **true** | **false** | `==` treats them as equal (special case). |
| `NaN == NaN` | **false** | **false** | `NaN` is not equal to anything, including itself. |

-----

### Comparing Objects and Arrays

This is a critical point: **Objects (including arrays) are compared by reference, not by value.**

This means both `==` and `===` check if the two variables point to the **exact same object in memory**, not if they have the same contents.

```javascript
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = arr1;

arr1 === arr2 // false (They look the same, but are two separate objects in memory)
arr1 == arr2  // false (Same reason)

arr1 === arr3 // true (arr3 points to the exact same object as arr1)

// The same logic applies to objects
let obj1 = { name: 'Alice' };
let obj2 = { name: 'Alice' };

obj1 === obj2 // false
```

-----

### The `NaN` Exception

A special value, `NaN` (Not-a-Number), is the only value in JavaScript that is not equal to itself.

```javascript
NaN === NaN // false
NaN == NaN  // false
```

  * To check if a value is `NaN`, you must use the `Number.isNaN()` function (or the older `isNaN()`).

<!-- end list -->

```javascript
let result = 0 / 'hello'; // This produces NaN
console.log(result);       // NaN

Number.isNaN(result)       // true
```

*/
