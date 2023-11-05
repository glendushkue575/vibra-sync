/*
 * This code calculates the Fibonacci sequence up to a given number of terms.
 * The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones.
 * The given number of terms is entered by the user.
 */

// FileName: fibonacci_sequence.js

function fibonacciSequence(numTerms) {
  // Initialize variables for the first two terms of the Fibonacci sequence
  let term1 = 0;
  let term2 = 1;

  // Check if the number of terms is less than or equal to 0
  if (numTerms <= 0) {
    console.log("Number of terms must be greater than zero.");
    return;
  }

  // Print the first term of the Fibonacci sequence
  console.log("Fibonacci Sequence:");

  // Loop to calculate and print the remaining terms of the Fibonacci sequence
  for (let i = 1; i <= numTerms; i++) {
    console.log(term1);
    let nextTerm = term1 + term2;
    term1 = term2;
    term2 = nextTerm;
  }
}

// Get input from the user
const num = parseInt(prompt("Enter the number of terms for the Fibonacci sequence:"));

// Call the function with the user input
fibonacciSequence(num);
