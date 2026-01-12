class Name {
  get location() {
    //getter method to get location
    return "Banglore";
  }

  constructor(age, firstName) {
    this.age = age;
    this.firstName = firstName;
  }

  fullName() {
    console.log(`first name is ${this.firstName} with age ${this.age}`);
  }
}

let name = new Name(25, "Abhinav");
console.log(name);
console.log(name.location);
name.fullName();
