/*

What is Array.prototype.filter()?
The filter method acts like a sieve for an array. Its job is to create a new array containing only the elements that meet a specific condition.
Result: A brand new array. The original array is never modified (this is known as immutability).

Condition: The function you pass into filter (the callback) runs on every item and must return a boolean (true or false).
If the callback returns true, the element is included in the new array.

If the callback returns false, the element is skipped.
*/
const scores = [85, 92, 78, 95, 88];
// Filter for scores greater than 90

const newScore = scores.filter((item) => item > 90);
console.log(newScore);

//create a new array called familyMovies that contains only the movies with a rating of 'G'.
const movies = [
  { title: "The Great Code", rating: "PG-13" },
  { title: "LearnJS", rating: "G" },
  { title: "Async Adventures", rating: "R" },
  { title: "The Callback Kids", rating: "G" },
];

const familyMovies = movies
  .filter((movie) => movie.rating === "G") //[{ title: 'LearnJS', rating: 'G' }, { title: 'The Callback Kids', rating: 'G' }]
  .map((movies) => movies.title); //[ 'LearnJS', 'The Callback Kids' ]
console.log(familyMovies);

//Use the filter method to create a new array called seniorEmployees that includes only employees with a seniority value of 5 or greater.
const employees = [
  { name: "Alice", seniority: 2 },
  { name: "Bob", seniority: 8 },
  { name: "Charlie", seniority: 1 },
  { name: "David", seniority: 5 },
];

const seniorEmp = employees
  .filter((employee) => employee.seniority >= 5)
  .map((employees) => employees.name); //[ 'Bob', 'David' ]
console.log(seniorEmp);

/*

While filter is about selection, map is about transformation. It takes every element in an array and applies a function to it, resulting in a completely new array where every item has been changed.
Goal: To transform data from one structure or value to another.
Output: A new array that is always the same length as the original array.
Rule: The callback function must return the new value that the element should become in the resulting array.


*/

//use the map method to create a new array called taxedPrices where every price has been increased by 10% (multiplied by 1.1).
const prices = [10.0, 25.5, 4.99, 100.0];

const taxedPrices = prices.map((item) => 1.1 * item);
console.log(taxedPrices);

/*
Reduce
The final method you asked about is reduce, which is the most powerful and often the trickiest to grasp.

What is Array.prototype.reduce()?

The purpose of reduce is to execute a function (the reducer) on every element in an array and collapse the array into a single resulting value. This result could be a number (like a sum), a string, a boolean, or even a completely new object or array.

The Accumulator

The key concept in reduce is the accumulator.

Think of it like keeping a running tally on a whiteboard:

The accumulator (acc) holds the current running total or result.

The current item (curr) is the element currently being processed.

The function returns the new value for the accumulator.

Syntax and Initial Value

The reduce method takes two arguments:

A callback function with two mandatory parameters: accumulator and currentItem.

An initial value (the starting value for the accumulator). This is crucial!
*/

//format
// array.reduce((accumulator, currentItem) => {
//   // Logic to combine accumulator and currentItem
//   return accumulator + currentItem; // Returns the new accumulator value
// }, initialValue); // <-- STARTING POINT for the accumulator

const dataPoints = [2, 5, 10, 3];
const sum = dataPoints.reduce((a, b) => a + b, 0);
const min = dataPoints.reduce((a, b) => Math.min(a, b));
const max = dataPoints.reduce((a, b) => Math.max(a, b));
console.log(sum);
console.log(max);
console.log(min);

//calculate the Total Revenue from the list of transactions below. select item with completed as true,
const transactions = [
  { id: 101, item: "Laptop", price: 1200, quantity: 1, completed: true },
  { id: 102, item: "Mouse", price: 25, quantity: 3, completed: false },
  { id: 103, item: "Keyboard", price: 75, quantity: 2, completed: true },
  { id: 104, item: "Monitor", price: 300, quantity: 1, completed: true },
  { id: 105, item: "Webcam", price: 50, quantity: 5, completed: false },
];

const allRevenue = transactions
  .filter((transaction) => transaction.completed === true)
  .map((transactions) => transactions.price * transactions.quantity)
  .reduce((a, b) => a + b, 0);

console.log(allRevenue);
