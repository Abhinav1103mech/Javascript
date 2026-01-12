const tinderUser = new Object(); //this is singleton objects and const tinderUser = {} is non sigleton objects

tinderUser.id = "123abc";
tinderUser.name = "Abhinav";
tinderUser.isLoggedIn = true;
console.log(tinderUser); //{ id: '123abc', name: 'Abhinav', isLoggedIn: true }

//imp
console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //[ '123abc', 'Abhinav', true ]
console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Abhinav' ], [ 'isLoggedIn', true ] ]

console.log(tinderUser.hasOwnProperty("name")); //true
console.log(tinderUser.hasOwnProperty("fullName")); // false

const regularUser = {
  email: "abhi@gmail.com",
  fullName: {
    firstName: "Abhinav",
    lastName: "Gupta",
  },
};

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

const obj3 = Object.assign(obj1, obj2); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } , use like this, {} is act like target and obj1, obj2 act as source
console.log(obj4);

const obj5 = { ...obj1, ...obj2 }; //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj5);
