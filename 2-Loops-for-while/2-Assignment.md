# JavaScript Loops Coding Assignment

## Overview

This assignment will test your understanding of JavaScript loops including `for`, `while`, and `do...while` loops. You'll solve practical problems that require iteration, array manipulation, and logical thinking.

## Setup

Create a file named `loops-assignment.js` and complete all the exercises below. Test your code by running it in Node.js or in a browser console.

---

## Part 1: for Loop Basics

### Exercise 1: Sum of Numbers

Write a function `sumNumbers(n)` that returns the sum of all numbers from 1 to n (inclusive).

**Example:**
```javascript
console.log(sumNumbers(5));   // 15 (1 + 2 + 3 + 4 + 5)
console.log(sumNumbers(10));  // 55
console.log(sumNumbers(100)); // 5050
```

---

### Exercise 2: Print Multiplication Table

Write a function `multiplicationTable(num, limit)` that prints the multiplication table for `num` up to `limit`.

**Example:**
```javascript
multiplicationTable(5, 10);
// Output:
// 5 × 1 = 5
// 5 × 2 = 10
// 5 × 3 = 15
// ...
// 5 × 10 = 50
```

---

### Exercise 3: Reverse a String

Write a function `reverseString(str)` that returns the string reversed using a for loop.

**Example:**
```javascript
console.log(reverseString("hello"));     // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
console.log(reverseString("12345"));     // "54321"
```

---

### Exercise 4: Count Vowels

Write a function `countVowels(str)` that counts the number of vowels (a, e, i, o, u) in a string. Make it case-insensitive.

**Example:**
```javascript
console.log(countVowels("hello"));          // 2
console.log(countVowels("JavaScript"));     // 3
console.log(countVowels("aeiouAEIOU"));     // 10
console.log(countVowels("xyz"));            // 0
```

---

### Exercise 5: FizzBuzz

Write a function `fizzBuzz(n)` that prints numbers from 1 to n with the following rules:
- For multiples of 3, print "Fizz"
- For multiples of 5, print "Buzz"
- For multiples of both 3 and 5, print "FizzBuzz"
- Otherwise, print the number

**Example:**
```javascript
fizzBuzz(15);
// Output:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
```

---

## Part 2: Array Manipulation with Loops

### Exercise 6: Find Maximum

Write a function `findMax(arr)` that finds the maximum value in an array using a for loop.

**Example:**
```javascript
console.log(findMax([1, 5, 3, 9, 2]));      // 9
console.log(findMax([10, 20, 30, 25]));     // 30
console.log(findMax([-5, -2, -10, -1]));    // -1
```

---

### Exercise 7: Remove Duplicates

Write a function `removeDuplicates(arr)` that returns a new array with all duplicate values removed.

**Example:**
```javascript
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// [1, 2, 3, 4, 5]

console.log(removeDuplicates(["a", "b", "a", "c", "b"]));
// ["a", "b", "c"]
```

---

### Exercise 8: Average of Array

Write a function `calculateAverage(arr)` that calculates the average of all numbers in an array. Return the result rounded to 2 decimal places.

**Example:**
```javascript
console.log(calculateAverage([10, 20, 30]));        // 20.00
console.log(calculateAverage([85, 90, 78, 92]));    // 86.25
console.log(calculateAverage([5]));                 // 5.00
```

---

### Exercise 9: Filter Even Numbers

Write a function `filterEvenNumbers(arr)` that returns a new array containing only the even numbers from the input array.

**Example:**
```javascript
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
// [2, 4, 6]

console.log(filterEvenNumbers([10, 15, 20, 25]));
// [10, 20]

console.log(filterEvenNumbers([1, 3, 5, 7]));
// []
```

---

### Exercise 10: Flatten Nested Array

Write a function `flattenArray(arr)` that flattens a two-dimensional array into a one-dimensional array.

**Example:**
```javascript
console.log(flattenArray([[1, 2], [3, 4], [5, 6]]));
// [1, 2, 3, 4, 5, 6]

console.log(flattenArray([[10, 20], [30], [40, 50, 60]]));
// [10, 20, 30, 40, 50, 60]
```

---

## Part 3: while Loop Challenges

### Exercise 11: Countdown

Write a function `countdown(start)` that uses a while loop to print a countdown from `start` to 1, then prints "Blastoff!".

**Example:**
```javascript
countdown(5);
// Output:
// 5
// 4
// 3
// 2
// 1
// Blastoff!
```

---

### Exercise 12: Find First Multiple

Write a function `findFirstMultiple(arr, divisor)` that finds and returns the first number in an array that is divisible by the given divisor. If no number is found, return null.

**Example:**
```javascript
console.log(findFirstMultiple([7, 8, 9, 10, 11, 12], 5));  // 10
console.log(findFirstMultiple([2, 4, 6, 8], 3));           // 6
console.log(findFirstMultiple([1, 3, 5, 7], 2));           // null
```

---

### Exercise 13: Power Function

Write a function `power(base, exponent)` that calculates base raised to the exponent using a while loop (don't use `Math.pow()`).

**Example:**
```javascript
console.log(power(2, 3));   // 8 (2 × 2 × 2)
console.log(power(5, 2));   // 25 (5 × 5)
console.log(power(10, 0));  // 1
console.log(power(3, 4));   // 81 (3 × 3 × 3 × 3)
```

---

### Exercise 14: Digit Sum

Write a function `digitSum(num)` that calculates the sum of all digits in a positive integer using a while loop.

**Example:**
```javascript
console.log(digitSum(123));    // 6 (1 + 2 + 3)
console.log(digitSum(9876));   // 30 (9 + 8 + 7 + 6)
console.log(digitSum(5));      // 5
```

---

### Exercise 15: Collatz Conjecture

Write a function `collatzSteps(n)` that returns how many steps it takes to reach 1 following the Collatz conjecture:
- If n is even, divide it by 2
- If n is odd, multiply by 3 and add 1
- Repeat until n equals 1

**Example:**
```javascript
console.log(collatzSteps(1));   // 0 (already at 1)
console.log(collatzSteps(2));   // 1 (2 → 1)
console.log(collatzSteps(3));   // 7 (3 → 10 → 5 → 16 → 8 → 4 → 2 → 1)
console.log(collatzSteps(6));   // 8
```

---

## Part 4: do...while Loop Practice

### Exercise 16: Input Validator

Write a function `validatePositive(numbers)` that processes an array of numbers using a do...while loop. Keep processing until you find a negative number or reach the end. Return an array of all the positive numbers processed before encountering the first negative number.

**Example:**
```javascript
console.log(validatePositive([1, 2, 3, -4, 5]));
// [1, 2, 3]

console.log(validatePositive([5, 10, 15]));
// [5, 10, 15]

console.log(validatePositive([-1, 2, 3]));
// []
```

---

### Exercise 17: Dice Roll Simulator

Write a function `rollUntilSix()` that simulates rolling a six-sided die using a do...while loop. Keep rolling until you get a 6, and return how many rolls it took.

**Example:**
```javascript
// Use Math.floor(Math.random() * 6) + 1 to simulate a die roll
// Since this is random, the output will vary
console.log(rollUntilSix()); // might return 3, 7, 1, etc.
```

---

## Part 5: Nested Loops

### Exercise 18: Create Pattern

Write a function `createPattern(rows)` that creates the following pattern:

**Example:**
```javascript
createPattern(5);
// Output:
// *
// **
// ***
// ****
// *****
```

---

### Exercise 19: Create Pyramid

Write a function `createPyramid(height)` that creates a pyramid pattern:

**Example:**
```javascript
createPyramid(5);
// Output:
//     *
//    ***
//   *****
//  *******
// *********
```

---

### Exercise 20: Multiplication Grid

Write a function `multiplicationGrid(size)` that creates a multiplication table grid.

**Example:**
```javascript
multiplicationGrid(5);
// Output:
//  1  2  3  4  5
//  2  4  6  8 10
//  3  6  9 12 15
//  4  8 12 16 20
//  5 10 15 20 25
```

---

## Part 6: Advanced Challenges

### Exercise 21: Prime Number Checker

Write a function `isPrime(num)` that checks if a number is prime using a for loop.

**Example:**
```javascript
console.log(isPrime(7));    // true
console.log(isPrime(10));   // false
console.log(isPrime(2));    // true
console.log(isPrime(1));    // false
console.log(isPrime(17));   // true
```

---

### Exercise 22: Find All Primes

Write a function `findPrimes(limit)` that returns an array of all prime numbers up to and including the limit.

**Example:**
```javascript
console.log(findPrimes(10));  // [2, 3, 5, 7]
console.log(findPrimes(20));  // [2, 3, 5, 7, 11, 13, 17, 19]
```

---

### Exercise 23: Fibonacci Sequence

Write a function `fibonacci(n)` that returns an array containing the first n numbers of the Fibonacci sequence.

**Example:**
```javascript
console.log(fibonacci(5));   // [0, 1, 1, 2, 3]
console.log(fibonacci(8));   // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacci(1));   // [0]
```

---

### Exercise 24: Palindrome Checker

Write a function `isPalindrome(str)` that checks if a string is a palindrome (reads the same forwards and backwards). Ignore spaces and make it case-insensitive.

**Example:**
```javascript
console.log(isPalindrome("racecar"));           // true
console.log(isPalindrome("hello"));             // false
console.log(isPalindrome("A man a plan a canal Panama"));  // true
console.log(isPalindrome("Madam"));             // true
```

---

### Exercise 25: Array Chunk

Write a function `chunkArray(arr, size)` that splits an array into chunks of the specified size.

**Example:**
```javascript
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3));
// [[1, 2, 3], [4, 5, 6], [7, 8]]

console.log(chunkArray([1, 2, 3, 4, 5], 2));
// [[1, 2], [3, 4], [5]]
```

---

## Bonus Challenges

### Bonus 1: Caesar Cipher

Write a function `caesarCipher(str, shift)` that implements a Caesar cipher. Shift each letter by the specified amount. Keep non-letter characters unchanged.

**Example:**
```javascript
console.log(caesarCipher("abc", 1));      // "bcd"
console.log(caesarCipher("xyz", 2));      // "zab"
console.log(caesarCipher("Hello, World!", 3));  // "Khoor, Zruog!"
```

---

### Bonus 2: Bubble Sort

Write a function `bubbleSort(arr)` that implements the bubble sort algorithm to sort an array in ascending order.

**Example:**
```javascript
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
// [11, 12, 22, 25, 34, 64, 90]

console.log(bubbleSort([5, 1, 4, 2, 8]));
// [1, 2, 4, 5, 8]
```

---

### Bonus 3: Pascal's Triangle

Write a function `pascalsTriangle(rows)` that generates Pascal's Triangle up to the specified number of rows.

**Example:**
```javascript
console.log(pascalsTriangle(5));
// [
//   [1],
//   [1, 1],
//   [1, 2, 1],
//   [1, 3, 3, 1],
//   [1, 4, 6, 4, 1]
// ]
```

---

## Testing Guidelines

1. Test each function with the provided examples
2. Test edge cases:
   - Empty arrays
   - Single-element arrays
   - Negative numbers
   - Zero
   - Very large numbers
3. Test invalid inputs (consider how your function should handle them)

---

## Submission Checklist

- [ ] All functions are properly named
- [ ] Code is well-commented
- [ ] All test cases pass
- [ ] Edge cases are handled
- [ ] Code follows consistent formatting
- [ ] No infinite loops (test carefully!)
- [ ] Variables have descriptive names

---

## Grading Criteria

- **Correctness** (40%): Functions produce correct outputs
- **Code Quality** (25%): Clean, readable, well-organized code
- **Efficiency** (15%): Appropriate loop choice and optimization
- **Edge Case Handling** (10%): Functions handle unexpected inputs gracefully
- **Comments & Documentation** (10%): Clear explanations of logic

---

## Tips for Success

1. Start with the easier exercises and build confidence
2. Use `console.log()` liberally to debug your loops
3. Draw out what your loop should do on paper first
4. Pay attention to loop conditions (< vs <=)
5. Make sure your loop variables are incrementing/decrementing correctly
6. Test with small inputs first before trying larger ones
7. If stuck, break the problem into smaller steps
8. Remember: it's better to have a working solution than a perfect one

---

## Additional Resources

- Review the "JavaScript Loops" article for concepts
- Practice on FreeCodeCamp's JavaScript curriculum
- Solve loop challenges on Codewars and LeetCode
- Use the MDN documentation for reference

Good luck! Remember, the key to mastering loops is practice. Don't get discouraged if you get stuck—debugging is part of the learning process!