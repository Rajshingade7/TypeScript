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
// Base class
var Animal = /** @class */ (function () {
    // Constructor
    function Animal(name) {
        this.name = name;
    }
    // Method
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("".concat(this.name, " moved ").concat(distance, " meters"));
    };
    return Animal;
}());
// Derived class (inherits from Animal)
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Method overriding
    Dog.prototype.move = function (distance) {
        if (distance === void 0) { distance = 5; }
        console.log("".concat(this.name, " walked ").concat(distance, " meters"));
    };
    // New method
    Dog.prototype.bark = function () {
        console.log("Woof! Woof!");
    };
    return Dog;
}(Animal));
// Creating instances of the classes
var myAnimal = new Animal("Animal");
var myDog = new Dog("Buddy");
// Accessing inherited properties and methods
myAnimal.move(10); // Output: Animal moved 10 meters
myDog.move(); // Output: Buddy walked 5 meters
myDog.bark(); // Output: Woof! Woof!
