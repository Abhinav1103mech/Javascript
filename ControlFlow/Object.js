const user = {
  name: "Abhinav",
  age: 31,
  city: "Delhi",
};

console.log(Object.keys(user)); // [ 'name', 'age', 'city' ] gives all keys in array
console.log(Object.values(user)); // [ 'Abhinav', 31, 'Delhi' ] gives all values in array

console.log(Object.entries(user)); //[ [ 'name', 'Abhinav' ], [ 'age', 31 ], [ 'city', 'Delhi' ] ] , it provide key value pair in array

Object.keys(user).forEach((key) => {
  console.log(key, user[key]);
});
// name Abhinav
// age 31
// city Delhi

for (const key in user) {
  console.log(key, user[key]);
}
// name Abhinav
// age 31
// city Delhi
