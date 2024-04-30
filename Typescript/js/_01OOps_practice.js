var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    // Constructor
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    // Method
    Car.prototype.displayInfo = function () {
        console.log("Car: ".concat(this.brand, " ").concat(this.model, " (").concat(this.year, ")"));
    };
    return Car;
}());
// Create an instance of the Car class
var myCar = new Car("Toyota", "Camry", 2020);
myCar.displayInfo(); // Output: Car: Toyota Camry (2020)
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    function ElectricCar(brand, model, year, batteryCapacity) {
        var _this = _super.call(this, brand, model, year) || this;
        _this.batteryCapacity = batteryCapacity;
        return _this;
    }
    ElectricCar.prototype.displayInfo = function () {
        _super.prototype.displayInfo.call(this);
        console.log("Battery Capacity: ".concat(this.batteryCapacity, " kWh"));
    };
    return ElectricCar;
}(Car));
var myElectricCar = new ElectricCar("Tesla", "Model S", 2022, 100);
myElectricCar.displayInfo();
// Output:
// Car: Tesla Model S (2022)
// Battery Capacity: 100 kWh
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.speak = function () {
        console.log("Animal makes a sound");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.speak = function () {
        console.log("Dog barks");
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.speak = function () {
        console.log("Cat meows");
    };
    return Cat;
}(Animal));
function makeSound(animal) {
    animal.speak();
}
var dog = new Dog();
var cat = new Cat();
makeSound(dog); // Output: Dog barks
makeSound(cat); // Output: Cat meows
