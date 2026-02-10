# Control Structures Coding Assignment

## Overview

This assignment will test your understanding of JavaScript control structures (if...else and switch statements). You'll build practical functions that use conditional logic to solve real-world problems.

## Setup

Create a file named `control-structures-assignment.js` and complete all the exercises below. Test your code by running it in Node.js or in a browser console.

---

## Part 1: if...else Statements

### Exercise 1: Temperature Classifier

Write a function `classifyTemperature(temp)` that takes a temperature in Celsius and returns a description:

- Below 0: "Freezing"
- 0 to 10: "Cold"
- 11 to 20: "Cool"
- 21 to 30: "Warm"
- Above 30: "Hot"

**Example:**
```javascript
console.log(classifyTemperature(-5));  // "Freezing"
console.log(classifyTemperature(15));  // "Cool"
console.log(classifyTemperature(32));  // "Hot"
```

---

### Exercise 2: Grade Calculator

Write a function `calculateGrade(score)` that takes a numerical score (0-100) and returns the letter grade:

- 90-100: "A"
- 80-89: "B"
- 70-79: "C"
- 60-69: "D"
- Below 60: "F"
- Invalid scores (< 0 or > 100): "Invalid score"

**Example:**
```javascript
console.log(calculateGrade(95));   // "A"
console.log(calculateGrade(73));   // "C"
console.log(calculateGrade(105));  // "Invalid score"
```

---

### Exercise 3: Leap Year Checker

Write a function `isLeapYear(year)` that determines if a year is a leap year. The rules are:

- A year is a leap year if it's divisible by 4
- EXCEPT if it's divisible by 100 (then it's NOT a leap year)
- EXCEPT if it's divisible by 400 (then it IS a leap year)

**Example:**
```javascript
console.log(isLeapYear(2024));  // true (divisible by 4)
console.log(isLeapYear(1900));  // false (divisible by 100 but not 400)
console.log(isLeapYear(2000));  // true (divisible by 400)
```

---

### Exercise 4: Login Validator

Write a function `validateLogin(username, password)` that validates login credentials:

- Username must be at least 5 characters long
- Password must be at least 8 characters long
- Password must contain at least one number

Return an object with `isValid` (boolean) and `message` (string explaining any issues).

**Example:**
```javascript
console.log(validateLogin("john", "pass"));
// { isValid: false, message: "Username must be at least 5 characters" }

console.log(validateLogin("john_doe", "password"));
// { isValid: false, message: "Password must contain at least one number" }

console.log(validateLogin("john_doe", "password123"));
// { isValid: true, message: "Login successful" }
```

---

## Part 2: switch Statements

### Exercise 5: Day of the Week

Write a function `getDayName(dayNumber)` that takes a number (1-7) and returns the day name using a switch statement:

- 1: "Monday"
- 2: "Tuesday"
- 3: "Wednesday"
- 4: "Thursday"
- 5: "Friday"
- 6: "Saturday"
- 7: "Sunday"
- Any other number: "Invalid day"

**Example:**
```javascript
console.log(getDayName(3));   // "Wednesday"
console.log(getDayName(7));   // "Sunday"
console.log(getDayName(10));  // "Invalid day"
```

---

### Exercise 6: Simple Calculator

Write a function `calculate(num1, num2, operator)` that performs basic arithmetic using a switch statement:

- "+": addition
- "-": subtraction
- "*": multiplication
- "/": division (handle division by zero!)
- "%": modulus
- Any other operator: return "Invalid operator"

**Example:**
```javascript
console.log(calculate(10, 5, "+"));   // 15
console.log(calculate(10, 5, "-"));   // 5
console.log(calculate(10, 5, "*"));   // 50
console.log(calculate(10, 0, "/"));   // "Cannot divide by zero"
console.log(calculate(10, 5, "^"));   // "Invalid operator"
```

---

### Exercise 7: Season Identifier

Write a function `getSeason(month)` that takes a month name (string) and returns the season using a switch statement:

- December, January, February: "Winter"
- March, April, May: "Spring"
- June, July, August: "Summer"
- September, October, November: "Fall"
- Invalid month: "Invalid month"

Make it case-insensitive!

**Example:**
```javascript
console.log(getSeason("January"));    // "Winter"
console.log(getSeason("july"));       // "Summer" (case-insensitive)
console.log(getSeason("October"));    // "Fall"
console.log(getSeason("Smarch"));     // "Invalid month"
```

---

## Part 3: Combined Control Structures

### Exercise 8: Traffic Light System

Write a function `trafficLight(color, pedestrianWaiting)` that determines what action to take:

- Green light: "Go"
- Yellow light: "Slow down"
- Red light with no pedestrian: "Stop"
- Red light with pedestrian: "Stop and wait for pedestrian"
- Invalid color: "Malfunction"

Use both if and switch statements appropriately.

**Example:**
```javascript
console.log(trafficLight("green", false));  // "Go"
console.log(trafficLight("red", true));     // "Stop and wait for pedestrian"
console.log(trafficLight("yellow", false)); // "Slow down"
console.log(trafficLight("blue", false));   // "Malfunction"
```

---

### Exercise 9: Movie Ticket Pricing

Write a function `getTicketPrice(age, day, isStudent)` that calculates movie ticket prices:

Base prices by day:
- Weekday (Monday-Thursday): $12
- Weekend (Friday-Sunday): $15

Discounts:
- Children (under 13): 50% off
- Seniors (65 and over): 30% off
- Students (any age, on weekdays only): 20% off

Return the final price rounded to 2 decimal places.

**Example:**
```javascript
console.log(getTicketPrice(10, "Monday", false));     // 6.00 (child discount)
console.log(getTicketPrice(30, "Friday", true));      // 15.00 (no student discount on weekends)
console.log(getTicketPrice(30, "Tuesday", true));     // 9.60 (student discount)
console.log(getTicketPrice(70, "Sunday", false));     // 10.50 (senior discount)
```

---

### Exercise 10: Shipping Cost Calculator

Write a function `calculateShipping(weight, destination, shippingSpeed)` that calculates shipping costs:

Base rates by destination:
- "domestic": $5
- "international": $15

Weight charges (added to base rate):
- 0-5 lbs: $0
- 5.1-20 lbs: $5
- Over 20 lbs: $10 + $0.50 per pound over 20

Speed multipliers:
- "standard": 1x (no change)
- "express": 1.5x
- "overnight": 2.5x

Return the total cost rounded to 2 decimal places, or an error message for invalid inputs.

**Example:**
```javascript
console.log(calculateShipping(3, "domestic", "standard"));        // 5.00
console.log(calculateShipping(10, "international", "express"));   // 30.00
console.log(calculateShipping(25, "domestic", "overnight"));      // 50.00
console.log(calculateShipping(3, "mars", "standard"));            // "Invalid destination"
```

---

## Bonus Challenge: Rock, Paper, Scissors Game

Write a function `rockPaperScissors(player1, player2)` that determines the winner:

- Valid choices: "rock", "paper", "scissors" (case-insensitive)
- Rock beats scissors
- Scissors beats paper
- Paper beats rock
- Same choice = tie

Return: "Player 1 wins", "Player 2 wins", "It's a tie", or "Invalid input"

**Example:**
```javascript
console.log(rockPaperScissors("rock", "scissors"));    // "Player 1 wins"
console.log(rockPaperScissors("paper", "rock"));       // "Player 1 wins"
console.log(rockPaperScissors("rock", "rock"));        // "It's a tie"
console.log(rockPaperScissors("rock", "banana"));      // "Invalid input"
```

---

## Testing Your Code

Create a test file that calls each function with various inputs to verify they work correctly. Consider edge cases like:

- Empty strings
- Negative numbers
- Very large numbers
- Null or undefined values
- Incorrect data types

---

## Submission Guidelines

1. Create a single JavaScript file with all your solutions
2. Include comments explaining your logic for complex functions
3. Test all functions with the provided examples
4. Add your own test cases for edge cases
5. Use proper formatting and indentation

## Grading Criteria

- **Correctness** (50%): Functions produce correct outputs
- **Code Quality** (25%): Clean, readable code with proper formatting
- **Edge Case Handling** (15%): Functions handle invalid or unexpected inputs
- **Efficiency** (10%): Appropriate use of control structures

---

## Additional Resources

- Review the article on Control Structures
- MDN Web Docs: if...else statement
- MDN Web Docs: switch statement
- Practice on coding platforms like Codewars or LeetCode

Good luck! Remember to test your code thoroughly and ask for help if you get stuck.