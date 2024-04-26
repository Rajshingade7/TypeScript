"use strict";
// Readonly variable
const pi = 3.14;
// pi = 3.14159; // Error: Cannot assign to 'pi' because it is a constant
// Readonly property
class Circle {
    constructor(radius) {
        this.pi = 3.14;
        this.radius = radius;
    }
    getArea() {
        return this.pi * this.radius * this.radius;
    }
}
let circle = new Circle(5);
console.log(circle.getArea()); // Output: 78.5
// circle.radius = 10; // Error: Cannot assign to 'radius' because it is a read-only property
// Readonly array
let numbers = [1, 2, 3, 4, 5];
// numbers.push(6); // Error: Property 'push' does not exist on type 'readonly number[]'
// numbers[0] = 10; // Error: Index signature in type 'readonly number[]' only permits reading
