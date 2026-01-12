function message(name = "Abhinav") {
  // default value, if nothing passed , it just take the Abhinav
  if (!name) {
    // equivalent to name === undefined, if name is passed as empty/ nothing as provide in username (if no default value provided, the it take name as undefined, try to remove Abhinav and run)
    console.log("please enter username");
    return;
  } else return `${name} has entered`;
}

console.log(message());
console.log(message("Tanuja"));

const result = function sum(num1, num2) {
  //{ inside this curly braces function body written }-->{} called scope in function
  return num1 + num2;
};

const nine = result(4, 5);
const ten = result(5, 5);
console.log(nine + ten);

// Anonymous Function Expression
const multiply = function (num1, num2) {
  return num1 * num2;
};

console.log(multiply(4, 5)); // Still prints 20

//arrow function
const multiply1 = (num1, num2) => {
  // if there is curly braces in arrow function then return must be there
  return num1 * num2;
};

const multiply2 = (num1, num2) => num1 * num2; // if you are using () then no need to write return keyword
console.log(multiply2);

console.log(multiply1(10, 2));
// if there single line in function body we can remove the {}
// above can also be written as const multiply1 = (num1, num2) => num1 * num2;

const isEven = (num) => num % 2 == 0; //If an arrow function has exactly one parameter, you can leave off the parentheses () around it and no need to write return
console.log(isEven(22));

const user = {
  name: "Abhinav",
  age: 31,
};

function handleObject(anyObject) {
  console.log(`name is ${anyObject.name} and age is ${anyObject.age}`);
}

// handleObject(user); name is Abhinav and age is 31

//below is also a way to handle object inside the function
handleObject({
  name: "Abhinav",
  age: 31,
});

function getValFromArr(arr, i) {
  return arr[i];
}

const arr = [2, 3, 5, 6, 8];
console.log(getValFromArr(arr, 2)); //5

function one() {
  const name = "Abhinav";
  function two() {
    const age = 31;
    console.log(name + " " + age);
  }
  console.log(name);

  two(); // when we comment out two then only Abhinav will print
}

one();

console.log(this); //{} empty object
