# Class 15

## Key Points
- deep dive into constructors on JS part 2
  - `this` in object points to that object
  - `this` in function depends on invocation context
  - `this` in constructor function points to the created object
```js
// Recap - this
const obj = {
  printThis () {
    console.log("THIS ", this)
  }
};

obj.printThis();

function printGlobalThis() {
  console.log("THIS GLOBAL ", this);
}

printGlobalThis();

console.log(this);
```
- introduction to constructor functions
```js
function User(firstName, lastName, yearOfBirth) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.getYearsOld = function () {
    return 2024 - this.yearOfBirth;
  };
  this.fullName = function () {
      return this.name + ' ' + this.lastName
  }
}

const john = new User('John', 'Doe', 1981);
const pera = new User('Pera', 'Peric', 1970);

console.log(john.fullName() + ' is ' + john.getYearsOld() + ' years old.');
console.log(pera.fullName() + ' is ' + pera.getYearsOld() + ' years old.');
```

## Homework
- Create Car constructor
- Create a couple of Car instances
- Car should have name, model, productionYear, and calculateCarAge method

```js
// Homework - Constructor functions
function Car (name, model, color, productionYear ) {
  this.name = name;
  this.model = model;
  this.color = color;
  this.productionYear = productionYear;
  this.calculateCarAge = function () {
    return (2024 - this.productionYear);
  }
}

const car1 = new Car ("Honda", "Civic", "Red", 2000);
const car2 = new Car ("Opel", "Kadet", "White", 1989);
const car3 = new Car ("Volkswagen", "Passat", "Grey", 2021);


console.log("Car1: ", car1, car1.calculateCarAge());
console.log("Car2: ", car2, car2.calculateCarAge());
console.log("Car3: ", car3, car3.calculateCarAge());
```
