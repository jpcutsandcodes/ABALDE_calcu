const prompt = require("prompt-sync")();

// Functions for operations
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) throw new Error("❌ Cannot divide by zero!");
  return a / b;
}
function average(a, b) { return (a + b) / 2; }

// Main program loop
while (true) {
  try {
    console.log("\n--- Simple Calculator ---");

    // Input numbers
    let a = parseFloat(prompt("Enter first number: "));
    let b = parseFloat(prompt("Enter second number: "));

    if (isNaN(a) || isNaN(b)) {
      console.log("⚠️ Please enter valid numbers!");
      continue; // Restart loop
    }

    // Choose operation
    console.log("\nChoose an operation:");
    console.log("1. Addition (+)");
    console.log("2. Subtraction (-)");
    console.log("3. Multiplication (*)");
    console.log("4. Division (/)");
    console.log("5. Average");
    let choice = prompt("Enter choice (1-5): ");

    let result;
    switch (choice) {
      case "1": result = add(a, b); break;
      case "2": result = subtract(a, b); break;
      case "3": result = multiply(a, b); break;
      case "4": result = divide(a, b); break;
      case "5": result = average(a, b); break;
      default:
        console.log("⚠️ Invalid choice!");
        continue;
    }

    console.log(`\n✅ Result: ${result}`);

  } catch (err) {
    console.log("Error:", err.message);
  }

  // Ask user if they want to try again
  let again = prompt("\nDo you want to calculate again? (yes/no): ").toLowerCase();
  if (again !== "yes") {
    console.log("👋 Exiting calculator. Goodbye!");
    break;
  }
}
