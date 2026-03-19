# JavaScript Arrays and Objects - Coding Assignment (10 Exercises)

## Overview

This assignment contains 10 practical exercises that will solidify your understanding of JavaScript arrays and objects. These challenges mirror real-world tasks you'll encounter as a developer: transforming API data, filtering lists, calculating totals, and manipulating data structures.

Complete all exercises in a file named `arrays-objects-assignment.js`.

---

## Exercise 1: Extract User Names

**Difficulty**: ⭐ Easy

Given an array of user objects, return an array containing only their names.

**Requirements**:
- Use the `map()` method
- Return a new array

**Examples**:
```javascript
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 }
];

console.log(getUserNames(users));
// ['Alice', 'Bob', 'Charlie']
```

**Hint**: Use `map()` to transform each user object into just their name.

---

## Exercise 2: Filter Active Products

**Difficulty**: ⭐ Easy

Given an array of products, return only the products that are in stock.

**Requirements**:
- Use the `filter()` method
- Return products where `inStock` is `true`

**Examples**:
```javascript
const products = [
  { name: 'Laptop', price: 999, inStock: true },
  { name: 'Phone', price: 699, inStock: false },
  { name: 'Tablet', price: 399, inStock: true },
  { name: 'Monitor', price: 299, inStock: false }
];

console.log(getInStockProducts(products));
// [
//   { name: 'Laptop', price: 999, inStock: true },
//   { name: 'Tablet', price: 399, inStock: true }
// ]
```

---

## Exercise 3: Calculate Total Price

**Difficulty**: ⭐⭐ Medium

Calculate the total price of all items in a shopping cart.

**Requirements**:
- Use the `reduce()` method
- Multiply price by quantity for each item
- Return the total as a number

**Examples**:
```javascript
const cart = [
  { item: 'Laptop', price: 999, quantity: 1 },
  { item: 'Mouse', price: 25, quantity: 2 },
  { item: 'Keyboard', price: 75, quantity: 1 }
];

console.log(calculateTotal(cart));
// 1124 (999*1 + 25*2 + 75*1)
```

**Hint**: Start with 0, then add `price * quantity` for each item.

---

## Exercise 4: Find User by ID

**Difficulty**: ⭐ Easy

Find and return a user object with a specific ID.

**Requirements**:
- Use the `find()` method
- Return the user object or `undefined` if not found

**Examples**:
```javascript
const users = [
  { id: 1, name: 'Alice', email: 'alice@email.com' },
  { id: 2, name: 'Bob', email: 'bob@email.com' },
  { id: 3, name: 'Charlie', email: 'charlie@email.com' }
];

console.log(findUserById(users, 2));
// { id: 2, name: 'Bob', email: 'bob@email.com' }

console.log(findUserById(users, 5));
// undefined
```

---

## Exercise 5: Check If Any Item Is Expensive

**Difficulty**: ⭐ Easy

Check if the shopping cart contains any item that costs more than $1000.

**Requirements**:
- Use the `some()` method
- Return `true` or `false`

**Examples**:
```javascript
const cart1 = [
  { item: 'Pen', price: 2 },
  { item: 'Laptop', price: 1200 },
  { item: 'Notebook', price: 5 }
];

const cart2 = [
  { item: 'Pen', price: 2 },
  { item: 'Notebook', price: 5 },
  { item: 'Eraser', price: 1 }
];

console.log(hasExpensiveItem(cart1)); // true
console.log(hasExpensiveItem(cart2)); // false
```

---

## Exercise 6: Get Adult Users

**Difficulty**: ⭐⭐ Medium

Filter users to get only those who are 18 or older, then return their names in uppercase.

**Requirements**:
- Use both `filter()` and `map()` (chain them)
- Filter for age >= 18
- Convert names to uppercase

**Examples**:
```javascript
const users = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 16 },
  { name: 'Diana', age: 30 }
];

console.log(getAdultNames(users));
// ['BOB', 'DIANA']
```

**Hint**: First filter, then map the result.

---

## Exercise 7: Group Products by Category

**Difficulty**: ⭐⭐⭐ Hard

Group an array of products by their category.

**Requirements**:
- Use the `reduce()` method
- Return an object where keys are categories and values are arrays of products

**Examples**:
```javascript
const products = [
  { name: 'Laptop', category: 'Electronics', price: 999 },
  { name: 'Shirt', category: 'Clothing', price: 29 },
  { name: 'Phone', category: 'Electronics', price: 699 },
  { name: 'Pants', category: 'Clothing', price: 49 }
];

console.log(groupByCategory(products));
// {
//   Electronics: [
//     { name: 'Laptop', category: 'Electronics', price: 999 },
//     { name: 'Phone', category: 'Electronics', price: 699 }
//   ],
//   Clothing: [
//     { name: 'Shirt', category: 'Clothing', price: 29 },
//     { name: 'Pants', category: 'Clothing', price: 49 }
//   ]
// }
```

**Hint**: Start with an empty object `{}`, then check if the category exists before pushing.

---

## Exercise 8: Transform User Data

**Difficulty**: ⭐⭐ Medium

Transform an API response into a format your app can use.

**Requirements**:
- Use `map()` with object destructuring
- Combine first and last names into `fullName`
- Add an `isAdult` boolean property

**Examples**:
```javascript
const apiUsers = [
  { id: 1, first_name: 'John', last_name: 'Doe', age: 30, active: true },
  { id: 2, first_name: 'Jane', last_name: 'Smith', age: 17, active: false }
];

console.log(transformUsers(apiUsers));
// [
//   { id: 1, fullName: 'John Doe', age: 30, isAdult: true, active: true },
//   { id: 2, fullName: 'Jane Smith', age: 17, isAdult: false, active: false }
// ]
```

---

## Exercise 9: Get Top Scorers

**Difficulty**: ⭐⭐⭐ Hard

Get the top 3 students by score, returning only their names.

**Requirements**:
- Sort by score (highest first)
- Take only the first 3 students
- Return only their names
- Chain methods: `sort()`, `slice()`, and `map()`

**Examples**:
```javascript
const students = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 78 },
  { name: 'Diana', score: 95 },
  { name: 'Eve', score: 88 }
];

console.log(getTopThree(students));
// ['Diana', 'Bob', 'Eve']
```

**Hint**: Use `sort((a, b) => b.score - a.score)` for descending order.

---

## Exercise 10: Calculate Shopping Cart Summary

**Difficulty**: ⭐⭐⭐ Hard

Create a complete shopping cart summary with multiple calculations.

**Requirements**:
- Calculate total number of items (sum of quantities)
- Calculate subtotal (sum of price × quantity)
- Calculate tax (13% of subtotal)
- Calculate total (subtotal + tax)
- Return an object with all these values

**Examples**:
```javascript
const cart = [
  { name: 'Laptop', price: 999, quantity: 1 },
  { name: 'Mouse', price: 25, quantity: 2 },
  { name: 'Keyboard', price: 75, quantity: 1 }
];

console.log(getCartSummary(cart));
// {
//   totalItems: 4,
//   subtotal: 1124,
//   tax: 146.12,
//   total: 1270.12
// }
```

**Hint**: Use `reduce()` multiple times or calculate everything in one reduce.

---

## Bonus Challenge (Optional)

### Bonus: Remove Duplicates by Property

**Difficulty**: ⭐⭐⭐ Hard

Remove duplicate users based on their email address (keep the first occurrence).

**Requirements**:
- Use `filter()` with `findIndex()`
- Compare by email property

**Examples**:
```javascript
const users = [
  { id: 1, name: 'John', email: 'john@email.com' },
  { id: 2, name: 'Jane', email: 'jane@email.com' },
  { id: 3, name: 'John Doe', email: 'john@email.com' },
  { id: 4, name: 'Bob', email: 'bob@email.com' }
];

console.log(removeDuplicatesByEmail(users));
// [
//   { id: 1, name: 'John', email: 'john@email.com' },
//   { id: 2, name: 'Jane', email: 'jane@email.com' },
//   { id: 4, name: 'Bob', email: 'bob@email.com' }
// ]
```

---

## Testing Your Solutions

Test each function with the provided examples:

```javascript
console.log("=== Exercise 1 ===");
console.log(getUserNames(users));
console.log();

console.log("=== Exercise 2 ===");
console.log(getInStockProducts(products));
console.log();

// Continue for all exercises...
```

---

## Submission Checklist

- [ ] All 10 exercises completed
- [ ] Each function tested with provided examples
- [ ] Code uses appropriate array methods
- [ ] No mutations of original arrays/objects (unless required)
- [ ] Code is clean and well-formatted
- [ ] Edge cases considered (empty arrays, etc.)

---

## Grading Criteria

- **Correctness** (50%): Functions work correctly with all test cases
- **Method Usage** (25%): Proper use of map, filter, reduce, etc.
- **Code Quality** (15%): Clean, readable code
- **Edge Cases** (10%): Handling empty arrays and edge conditions

---

## Tips for Success

1. **Use the right method**: Review the decision guide in the article
2. **Chain when needed**: Don't be afraid to combine methods
3. **Test incrementally**: Run each function as you complete it
4. **Console.log liberally**: Debug by printing intermediate results
5. **Don't mutate**: Use methods that return new arrays/objects
6. **Read the requirements**: Make sure you understand what's expected
7. **Try before looking**: Attempt the exercise before checking solutions

---

## Common Patterns You'll Use

- **Filter then map**: Get subset, then transform
- **Map then reduce**: Transform, then calculate
- **Destructuring**: Extract values from objects cleanly
- **Spread operator**: Copy arrays/objects safely
- **Arrow functions**: Keep your code concise

Good luck! These exercises will prepare you for real-world data manipulation tasks.