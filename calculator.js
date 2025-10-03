const prompt = require("prompt-sync")();

// Functions
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) throw new Error("Division by zero is not allowed!");
  return a / b;
}
function average(a, b) { return (a + b) / 2; }

// Main loop
let again = "yes";

while (again.toLowerCase() === "yes") {
  try {
    let a = parseFloat(prompt("Enter first number: "));
    let b = parseFloat(prompt("Enter second number: "));

    if (isNaN(a) || isNaN(b)) {
      throw new Error("Invalid input! Please enter numbers only.");
    }

    console.log("\nResults:");
    console.log("Addition: " + add(a, b));
    console.log("Subtraction: " + subtract(a, b));
    console.log("Multiplication: " + multiply(a, b));
    console.log("Division: " + divide(a, b));
    console.log("Average: " + average(a, b));
  } catch (error) {
    console.log("Error:", error.message);
  }

  again = prompt("\nDo you want to try again? (yes/no): ");
}

console.log("\nExiting calculator. Goodbye!");
