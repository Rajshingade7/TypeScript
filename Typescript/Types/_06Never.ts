function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        console.log("Hello");
    }
}

// Ab `never` type ka use karke hum yeh keh rahe hain ki `errorFunction` kabhi bhi kuch nahi return karegi.
var result2: never = throwError("Something went wrong");

// Similarly, `infiniteLoop` function bhi kabhi khatam nahi hogi, isliye uska return type bhi `never` hai.
let loopResult: never = infiniteLoop();
