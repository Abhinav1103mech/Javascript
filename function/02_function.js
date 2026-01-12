console.log(this); //{} empty object

const me = {
  name: "Abhinav",
  welcome: function () {
    console.log(`${this.name}, welcome you!`);
    console.log(this);
  },
};

me.welcome();

const user = {
  name: "Abhinav",
  greet: () => {
    console.log(this.name);
  },
};

user.greet(); // undefined ---> Because arrow functions do not bind this.
/*
So when should you use arrow functions?
✔ Callbacks
✔ Array methods (map, filter, reduce)
✔ Functional programming

❌ Methods in an object
❌ Constructors

Always use normal functions inside objects if you need this.
*/