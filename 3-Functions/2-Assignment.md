# JavaScript Functions - Coding Assignment (10 Exercises)

## Overview

This assignment contains 10 carefully designed exercises to help you master JavaScript functions. Each exercise builds on fundamental concepts and encourages you to write clean, reusable code.

Complete all exercises in a file named `functions-assignment.js` and test your solutions thoroughly.

---

## Exercise 1: min(a, b)

**Difficulty**: ⭐ Easy

Write a function `min(a, b)` that returns the smaller of two numbers.

**Requirements**:
- Use an if statement or ternary operator
- Handle equal numbers (return either one)

**Examples**:
```javascript
console.log(min(2, 5));    // 2
console.log(min(3, -1));   // -1
console.log(min(1, 1));    // 1
console.log(min(100, 99)); // 99
```

---

## Exercise 2: pow(x, n)

**Difficulty**: ⭐⭐ Medium

Write a function `pow(x, n)` that returns x raised to the power n. The function should only work with natural numbers (positive integers starting from 1).

**Requirements**:
- Use a loop to multiply x by itself n times
- Don't use `Math.pow()`
- Handle the case when n < 1

**Examples**:
```javascript
console.log(pow(3, 2));  // 9
console.log(pow(3, 3));  // 27
console.log(pow(1, 100)); // 1
console.log(pow(2, 5));  // 32
```

---

## Exercise 3: isEven(n)

**Difficulty**: ⭐ Easy

Write a function `isEven(n)` that returns `true` if the number is even, and `false` if it's odd.

**Examples**:
```javascript
console.log(isEven(4));   // true
console.log(isEven(7));   // false
console.log(isEven(0));   // true
console.log(isEven(-2));  // true
```

---

## Exercise 4: calculateDiscount(price, discountPercent)

**Difficulty**: ⭐⭐ Medium

Write a function that calculates the final price after applying a discount. Use default parameters (default discount to 0).

**Examples**:
```javascript
console.log(calculateDiscount(100, 10));  // 90.00
console.log(calculateDiscount(50, 20));   // 40.00
console.log(calculateDiscount(75));       // 75.00
```

---

## Exercise 5: getGrade(score)

**Difficulty**: ⭐⭐ Medium

Write a function that converts a numerical score (0-100) into a letter grade.

**Grading scale**:
- 90-100: "A"
- 80-89: "B"
- 70-79: "C"
- 60-69: "D"
- Below 60: "F"

**Examples**:
```javascript
console.log(getGrade(95));   // "A"
console.log(getGrade(85));   // "B"
console.log(getGrade(55));   // "F"
```

---

## Exercise 6: fizzBuzz(n)

**Difficulty**: ⭐⭐ Medium

Write a function that prints numbers from 1 to n, but:
- For multiples of 3, print "Fizz"
- For multiples of 5, print "Buzz"
- For multiples of both, print "FizzBuzz"

**Example**:
```javascript
fizzBuzz(15);
// 1
// 2
// Fizz
// 4
// Buzz
// ...
// FizzBuzz
```

---

## Exercise 7: reverseString(str)

**Difficulty**: ⭐⭐ Medium

Write a function that reverses a string using a loop.

**Examples**:
```javascript
console.log(reverseString("hello"));      // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
```

---

## Exercise 8: countVowels(str)

**Difficulty**: ⭐⭐ Medium

Write a function that counts vowels (a, e, i, o, u) in a string. Make it case-insensitive.

**Examples**:
```javascript
console.log(countVowels("hello"));      // 2
console.log(countVowels("JavaScript")); // 3
console.log(countVowels("xyz"));        // 0
```

---

## Exercise 9: findMax(arr)

**Difficulty**: ⭐⭐ Medium

Write a function that finds the maximum value in an array.

**Examples**:
```javascript
console.log(findMax([1, 5, 3, 9, 2]));   // 9
console.log(findMax([-5, -2, -10, -1])); // -1
```

---

## Exercise 10: isPalindrome(str)

**Difficulty**: ⭐⭐⭐ Hard

Write a function that checks if a string is a palindrome. Ignore spaces and case.

**Examples**:
```javascript
console.log(isPalindrome("racecar"));     // true
console.log(isPalindrome("hello"));       // false
console.log(isPalindrome("A man a plan a canal Panama")); // true
```

---

## Bonus: calculateFactorial(n)

Calculate the factorial of a number (n! = n × (n-1) × ... × 1).

**Examples**:
```javascript
console.log(calculateFactorial(5)); // 120
console.log(calculateFactorial(0)); // 1
```

---

## Submission Checklist

- [ ] All 10 exercises completed
- [ ] Each function tested with examples
- [ ] Code is clean and well-formatted
- [ ] Functions use proper return statements

## Grading Criteria

- **Correctness** (50%): Functions work correctly
- **Code Quality** (25%): Clean, readable code
- **Best Practices** (15%): Good use of parameters/returns
- **Edge Cases** (10%): Handle unexpected inputs

Good luck!