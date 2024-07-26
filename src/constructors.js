function printGlobalThis() {
  console.log("THIS GLOBAL ", this);
}

printGlobalThis();

console.log(this);

function Car(name, model, color, productionYear) {
  // Constructor function
  this.name = name;
  this.model = model;
  this.color = color;
  this.productionYear = productionYear;
  this.calculateCarAge = function () {
    return 2024 - this.productionYear;
  };
}

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
console.log(car1 === car2);
