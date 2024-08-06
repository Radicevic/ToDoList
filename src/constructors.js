// function printGlobalThis() {
//   console.log("THIS GLOBAL ", this);
// }

// printGlobalThis();

// console.log(this);

// function Car(name, model, color, productionYear) {
//   // Constructor function
//   this.name = name;
//   this.model = model;
//   this.color = color;
//   this.productionYear = productionYear;
//   this.calculateCarAge = function () {
//     return 2024 - this.productionYear;
//   };
// }

// class CarClass {
//   constructor(name, model, color, productionYear) {
//     this.name = name;
//     this.model = model;
//     this.color = color;
//     this.productionYear = productionYear;
//   }
//   calculateCarAge() {
//     return 2024 - this.productionYear;
//   }
// }

// const car1 = new CarClass("Opel", "Insignia", "Blue", 2010);
// const car2 = new CarClass("Kia", "ProCeed", "Yellow", 2020);

// console.log(car1.calculateCarAge(), car1.color);
// console.log(car1 === car2);

class User {
  constructor(userName, email, male, age) {
    this.userName = userName;
    this.email = email;
    this.male = male;
    this.age = age;
  }
  calculateYearBorn() {
    return 2024 - this.age;
  }
  trying() {
    return this.calculateYearBorn() + this.age;
  }
}

const user1 = new User("gagi", "gagi86@gmail.com", "m", 38);

console.log(
  user1,
  "Your year born is: ",
  user1.calculateYearBorn(),
  "Trying function: ",
  user1.trying()
);
