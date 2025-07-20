/*
Overview
In this activity, you received three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task was to identify the error, correct it, and verify the fix.
*/

// Program A: Syntax Error
// Description: This program is intended to display a simple prompt in the console but fails to run.

// What’s Wrong?
// This is a syntax error. The string literal is not properly closed with a matching double quote.
// The JavaScript engine would report an "Unterminated string literal" error.

// Proposed Fix: Add the closing double quote.
console.log("Welcome to the bootcamp"); // Corrected line


// ---

// Program B: Runtime Error
// Description: This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

let numbers = [2, 4, "eight"];
for (let i = 0; i < numbers.length; i++) {
  // What’s Wrong?
  // This is a runtime error. The array 'numbers' contains a string ("eight").
  // When 'numbers[i] * 2' is attempted with "eight", it results in NaN (Not-a-Number)
  // because "eight" cannot be coerced into a valid number for multiplication.

  // Proposed Fix: Change the string "eight" to its numeric equivalent, 8.
  let doubled = numbers[i] * 2;
  console.log(doubled);
}

// Corrected Program B (within a new array definition for clarity, or you could modify the original array directly)
let correctedNumbersB = [2, 4, 8]; // Changed "eight" to 8
for (let i = 0; i < correctedNumbersB.length; i++) {
  let doubled = correctedNumbersB[i] * 2;
  console.log(doubled);
}


// ---

// Program C: Logic Error
// Description: This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

function isPrime(num) {
  if (num < 2) return false; // Correct: Numbers less than 2 are not prime

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      // What’s Wrong?
      // This is a logic error. If 'num' is divisible by 'i' (meaning it's not prime),
      // the function currently returns 'true', incorrectly indicating it IS prime.
      return false; // Proposed Fix: Should return false if divisible, as it's NOT prime
    }
  }
  // What’s Wrong?
  // This is also a logic error. If the loop completes without finding any divisors,
  // it means the number IS prime, but the function currently returns 'false'.
  return true; // Proposed Fix: Should return true if no divisors are found, as it IS prime
}

// Verification examples:
console.log(isPrime(7)); // Expected: true (prime). Now returns true.
console.log(isPrime(6)); // Expected: false (not prime). Now returns false.
console.log(isPrime(2)); // Expected: true (prime). Now returns true.
console.log(isPrime(9)); // Expected: false (not prime). Now returns false.