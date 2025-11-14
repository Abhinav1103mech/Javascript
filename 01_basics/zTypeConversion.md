JavaScript type conversion, also known as type coercion.
JavaScript performs implicit (automatic) conversion and also allows explicit (manual) conversion.

We’ll cover: 1. Implicit conversion (automatic coercion) 2. Explicit conversion (Number(), String(), Boolean(), etc.) 3. Special cases every JS developer must know 4. Cheat sheet summary

⸻

🔥 1. IMPLICIT TYPE CONVERSION (Automatic)

JavaScript automatically converts data types during operations.

🟦 A) String Conversion

Happens when using + operator with a string.

"5" + 1 // "51"
1 + "5" // "15"
"hello" + 10 // "hello10"
1 + 2 + "2" // "32"
"1" + 2+ 2 // 122

- prefers string concatenation if either argument is a string.

But -, \*, / never concatenate — they convert to numbers.

"5" - 1 // 4
"6" \* "2" // 12
"9" / 3 // 3

⸻

🟩 B) Number Conversion (when using numeric operators)

Operators like: -, \*, /, %, comparison (<, >, ==).

"5" - 1 // 4 (string → number)
"5" \* 2 // 10
"10" / "2" // 5

Also booleans convert to numbers:

true + 1 // 2
false + 1 // 1

null and undefined convert too:

null + 1 // 1 (null → 0)
undefined + 1 // NaN (undefined → NaN)

⸻

🟧 C) Boolean Conversion (in logical context)

Values that become false (falsy):

false
0
-0
0n
"" (empty string)
null
undefined
NaN

Everything else is truthy.

Examples:

if ("hello") console.log("truthy"); // executed
if (0) console.log("not run"); // not executed
if ("") console.log("not run"); // empty string → false

⸻

🔥 2. EXPLICIT TYPE CONVERSION (Manual)

Using built-in functions:

⸻

2.1 Number Conversion

Use:

Number(value)
parseInt()
parseFloat()

Examples:

Number("5") // 5
Number("5.5") // 5.5
Number("abc") // NaN
Number("") // 0
Number(true) // 1
Number(false) // 0
Number(null) // 0
Number(undefined) // NaN

⸻

2.2 String Conversion

Use:

String(value)
value.toString()

Examples:

String(123) // "123"
String(true) // "true"
String(null) // "null"
String(undefined) // "undefined"

⸻

2.3 Boolean Conversion

Use:

Boolean(value)

Examples:

Boolean(1) // true
Boolean(0) // false
Boolean("") // false
Boolean("hi") // true
Boolean([]) // true
Boolean({}) // true
Boolean(null) // false

⸻

⚡ 3. DANGEROUS / SURPRISING CASES YOU MUST KNOW

Case 1: "5" + 1 vs "5" - 1

"5" + 1 // "51" (string concatenation)
"5" - 1 // 4 (numeric subtraction)

Because - is always numeric, but + is weird.

⸻

Case 2: == vs ===

== does type coercion,
=== is strict (no coercion).

0 == false // true (0 → false)
0 === false // false (different types)

"5" == 5 // true
"5" === 5 // false
null == undefined // true
null === undefined // false

Always prefer ===.

⸻

Case 3: null and undefined

Number(null) // 0
Number(undefined) // NaN

⸻

Case 4: Arrays in numeric context

[10] _ 2 // 20 (array → string "10" → number 10)
[1,2] _ 2 // NaN ("1,2" → NaN)

⸻

Case 5: Objects in addition

{} + {} // "[object Object][object Object]"
[] + {} // "[object Object]"
[] + [] // ""

(JS first converts objects to strings → then concatenates.)

⸻

🧠 Cheat Sheet (Easy to remember)

Implicit (automatic)

Expression Result
"5" + 1 "51"
"5" - 1 4
true + 1 2
null + 1 1
undefined + 1 NaN

⸻

Explicit

**Conversion** **Method**
to Number Number(x), +x, parseInt, parseFloat
to String String(x), x.toString()
to Boolean Boolean(x)

⸻

here are tricky, interview-style coercion problems plus answers and brief explanations. First I’ll give you the problems (so you can try them), then the answers with concise reasoning. Try to predict each output before peeking!

Problems (predict the result / behavior) 1. [] == ![] 2. 0 == '' 3. '' == false 4. [] + [] 5. [] + {} 6. {} + [] (hint: evaluate as an expression, not a block — in most consoles use parentheses: ({} + []) ) 7. +[] 8. +{} 9. typeof null 10. NaN === NaN 11. '5' + 3 - 1 12. 1 + 2 + '3' 13. Number(' \t\n') 14. String(Symbol('id')) (and) 'id' + Symbol('id') 15. null == undefined 16. { a: 1 } == { a: 1 } 17. parseInt('08') (modern engines — assume base 10) 18. Object.is(+0, -0) 19. Object.is(NaN, NaN) 20. [] == ''

⸻

Answers & short explanations 1. [] == ![] → true
Explanation: ![] → false. So [] == false. With ==, objects convert to primitives: [] → '' → 0. false → 0. So 0 == 0 → true. 2. 0 == '' → true
'' → 0, so 0 == 0. 3. '' == false → true
'' → 0, false → 0, so 0 == 0. 4. [] + [] → "" (empty string)
Both arrays convert to empty strings, concatenation yields "". 5. [] + {} → "[object Object]"
[] -> "", {} -> "[object Object]" when coerced to string, concatenation "" + "[object Object]". 6. {} + [] → "[object Object]" (when evaluated as an expression ({} + []))
Order matters syntactically. ({} + []) → "[object Object]". If you write {} at start of a line in REPL it may be parsed as block. Use parentheses. 7. +[] → 0
Unary + converts to number: [] → "" → 0. 8. +{} → NaN
{} cannot convert to a numeric primitive, becomes NaN. 9. typeof null → "object"
Historical JS bug — null reports "object". 10. NaN === NaN → false
NaN is not equal to anything, including itself. Use Number.isNaN() / isNaN() or Object.is() to detect. 11. '5' + 3 - 1 → 52 (number)
'5' + 3 → '53' (string). Then '53' - 1 coerces '53' → number 53 → 52. 12. 1 + 2 + '3' → "33" (string)
1 + 2 → 3, then 3 + '3' → '33'. 13. Number(' \t\n') → 0
A string of only whitespace converts to numeric 0. 14. String(Symbol('id')) → "Symbol(id)"
But 'id' + Symbol('id') → throws TypeError
Explanation: String(Symbol('id')) explicitly converts Symbol to string successfully. However, implicit string concatenation attempts to convert the Symbol to a primitive string implicitly and will throw — Symbols cannot be implicitly coerced to string. 15. null == undefined → true
Special == rule: null equals undefined only. 16. { a: 1 } == { a: 1 } → false
Objects are compared by reference; different object instances are not equal. 17. parseInt('08') → 8 (in modern engines)
Historically older engines treated strings starting with 0 as octal, but modern parseInt('08') = 8. Prefer parseInt(str, 10) to be explicit. 18. Object.is(+0, -0) → false
Object.is distinguishes plus and minus zero (unlike === where +0 === -0 is true). 19. Object.is(NaN, NaN) → true
Object.is treats NaN as equal to NaN (unlike ===). 20. [] == '' → true
[] → '' when coerced to primitive; empty string equals empty string.

⸻

Quick tips to ace coercion questions
• Prefer === and !== unless you intentionally want coercion.
• Know the ToPrimitive steps: objects → valueOf()/toString() → primitive. Arrays commonly become strings like "1,2".
• + with a string → concatenation; otherwise numerical addition.
• null == undefined is true but neither equals other falsy values with == (e.g., null == 0 → false).
• Use Object.is when you need to distinguish +0/-0 or treat NaN as equal.
