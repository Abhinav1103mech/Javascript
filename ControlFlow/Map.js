const map = new Map();
map.set("name", "Abhinav");
map.set(1, "Number key");
map.set(true, "Boolean key");

const objKey = { id: 1 };
map.set(objKey, "Object as key");

console.log(map.get("name")); // Abhinav
console.log(map.get(1)); // Number key
console.log(map.get(true)); // Boolean key
console.log(map.get(objKey)); // Object as key

console.log(map.size); //4

//Checking if a Key Exists (has())

console.log(map.has("name")); //true
console.log(map.has(2)); //false

//Deleting Keys (delete())
// map.delete(1);
// console.log(map.get(1)); //undefined

//Iterating Through a Map

for (const [key, val] of map) {
  console.log(`key is ${key} and val is  ${val}`);
}

for (const key of map.keys()) {
  console.log(key);
  console.log(map.get(key));
}

console.log("log via values");

for (const value of map.values()) {
  console.log(value);
}

console.log("log via entries");

for (const entry of map.entries()) {
  console.log(entry); // each key value pair comes in arrays form
  console.log(entry[0]); //print key of each entry
  console.log(entry[1]); // print value of each entry
}

map.forEach((value, key) => {
  //here first should be value
  console.log(key, value);
});
