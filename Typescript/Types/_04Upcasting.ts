// Base class
class Animal {
    // Properties
    name: string;

    // Constructor
    constructor(name: string) {
        this.name = name;
    }

    // Method
    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance} meters`);
    }
}

// Derived class (inherits from Animal)
class Dog extends Animal {
    // Method overriding
    move(distance: number = 5) {
        console.log(`${this.name} walked ${distance} meters`);
    }

    // New method
    bark() {
        console.log("Woof! Woof!");
    }
}

// Creating instances of the classes
let myAnimal = new Animal("Animal"); 
let myDog = new Dog("Buddy");

// Accessing inherited properties and methods
myAnimal.move(10); // Output: Animal moved 10 meters
myDog.move();      // Output: Buddy walked 5 meters
myDog.bark();      // Output: Woof! Woof!
