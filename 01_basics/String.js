const name = "Abhinav";
const age = 31;

console.log(
  `Hi my name is ${name} and my age is ${age} and i live in ` + "chakia"
);
//Hi my name is Abhinav and my age is 31 and i live in chakia

const gameName = new String("Cricket");
console.log(gameName[0]); //C
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase()); // it does not chnage to original string
console.log(gameName.charAt(3));
console.log(gameName.indexOf("i"));
console.log(gameName.substring(0, 4));
console.log(gameName.slice(0, 4));
console.log(gameName.trim());
console.log(gameName.replace("e", "E"));
