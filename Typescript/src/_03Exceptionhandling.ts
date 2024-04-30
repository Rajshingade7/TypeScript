try {
    // Code that may throw an exception
    throw new Error("Something went wrong");
} catch (error) {
    // Handling the exception
    console.error("An error occurred:", error.message);
} finally {
    // Code that runs regardless of whether an exception was thrown or caught
    console.log("Finally block executed");
}
let abc="abc";
abc="pqr";
abc="rer";
console.log(abc);

let xyz="xyz";
xyz="pqr";