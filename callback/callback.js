function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, callback) {
  callback(a, b);
}

calculator(1, 4, sum); //5

calculator(1, 4, (a, b) => console.log(a + b));
