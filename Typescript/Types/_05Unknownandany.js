"use strict";
let userInput;
// Assume ki userInput ko user se kisi form mein input liya ja raha hai
userInput = 5; // A valid number
console.log(typeof userInput); // Output: number
userInput = "Hello"; // A valid string
console.log(typeof userInput); // Output: string
userInput = { name: "John", age: 30 }; // A valid object
console.log(typeof userInput); // Output: object
// Ab aap dekh sakte hain ki userInput mein kuch bhi store kiya ja sakta hai.
// Unknown 
let userInput2;
userInput2 = 5;
if (typeof userInput2 === "number") {
    let numberValue = userInput2; // Typecasting
    console.log(numberValue * 2); // Output: 10
}
userInput2 = "Hello";
if (typeof userInput2 === "string") {
    let stringValue = userInput2; // Typecasting
    console.log(stringValue.toUpperCase()); // Output: HELLO
}
//Here in case of unknown each time we are doing typecasting and that is must condition for unknown
