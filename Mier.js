const prompt = require("prompt-sync")();

// Functions for operations
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) return "❌ Cannot divide by zero!";
  return a / b;
}
function average(a, b) { return (a + b) / 2; }

// Main loop
while (true) {
  console.log("\n--- Simple Calculator ---");

  let a = parseFloat(prompt("Enter first number: "));
  let b = parseFloat(prompt("Enter second number: "));

  if (isNaN(a) || isNaN(b)) {
    console.log("⚠️ Please enter valid numbers!");
    continue;
  }

  console.log("\n📊 Results:");
  console.log(`Addition: ${add(a, b)}`);
  console.log(`Subtraction: ${subtract(a, b)}`);
  console.log(`Multiplication: ${multiply(a, b)}`);
  console.log(`Division: ${divide(a, b)}`);
  console.log(`Average: ${average(a, b)}`);

  let again = prompt("\nDo you want to try again? (yes/no): ").toLowerCase();
  if (again !== "yes") {
    console.log("👋 Exiting calculator. Goodbye!");
    break;
  }
}
