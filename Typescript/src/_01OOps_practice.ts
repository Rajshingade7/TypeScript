class Car {
    // Properties
    brand: string;
    model: string;
    year: number;

    // Constructor
    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // Method
    displayInfo(): void {
        console.log(`Car: ${this.brand} ${this.model} (${this.year})`);
    }
}

// Create an instance of the Car class
const myCar = new Car("Toyota", "Camry", 2020);
myCar.displayInfo(); // Output: Car: Toyota Camry (2020)

class ElectricCar extends Car {
    batteryCapacity: number;

    constructor(brand: string, model: string, year: number, batteryCapacity: number) {
        super(brand, model, year);
        this.batteryCapacity = batteryCapacity;
    }

    displayInfo(): void {
        super.displayInfo();
        console.log(`Battery Capacity: ${this.batteryCapacity} kWh`);
    }
}

const myElectricCar = new ElectricCar("Tesla", "Model S", 2022, 100);
myElectricCar.displayInfo();
// Output:
// Car: Tesla Model S (2022)
// Battery Capacity: 100 kWh

class Animal {
    speak(): void {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    speak(): void {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    speak(): void {
        console.log("Cat meows");
    }
}

function makeSound(animal: Animal): void {
    animal.speak();
}

const dog = new Dog();
const cat = new Cat();

makeSound(dog); // Output: Dog barks
makeSound(cat); // Output: Cat meows
