# Class 16

## Key Points
- introduction to classes
```js
// Constructor function
function Car(name, model, color, productionYear) {
  this.name = name;
  this.model = model;
  this.color = color;
  this.productionYear = productionYear;
  this.calculateCarAge = function () {
    return 2024 - this.productionYear;
  };
}

// Class
class CarClass {
  constructor(name, model, color, productionYear) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.productionYear = productionYear;
  }
  calculateCarAge() {
    return 2024 - this.productionYear;
  }
}

const car1 = new CarClass("Opel", "Insignia", "Blue", 2010);
const car2 = new CarClass("Kia", "ProCeed", "Yellow", 2020);

console.log(car1.calculateCarAge(), car1.color);
console.log(car1 === car2); // false
```
- use axios instead of fetch method
  - we used already created axios instance for sending the API calls from `TodoService`

## Homework
- Add `Clear All` button
- When clicked all todo items are deleted
- Button should be placed next to `Add` button
