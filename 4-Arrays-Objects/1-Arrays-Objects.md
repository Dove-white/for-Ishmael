# JavaScript Arrays and Objects: Complete Data Manipulation Guide

## Introduction

If you've learned JavaScript basics—variables, functions, and control structures—you're ready for the next critical skill: **working with data**. Real applications don't deal with single values. They work with collections: user lists, product catalogs, shopping carts, API responses, search results.

This is where arrays and objects come in. **90% of JavaScript code involves manipulating arrays and objects.** Every time you fetch data from an API, filter a list, calculate a total, or display items on a page, you're using these data structures.

By the end of this guide, you'll understand:

- When to use arrays vs objects
- The 7 essential array methods (map, filter, reduce, and more)
- Object creation, manipulation, and destructuring
- Spread and rest operators for copying and combining data
- How to chain methods for complex transformations
- Real-world data manipulation patterns
- Working with JSON and API data

This isn't theory—these are techniques you'll use in every project. Let's dive in.

## Arrays: Ordered Lists of Data

An array is an ordered collection of items. Think of it as a numbered list where each item has a position (index) starting from 0.

### Creating Arrays

```javascript
// Array literal (most common)
const fruits = ['apple', 'banana', 'orange'];

// Array constructor (rarely used)
const numbers = new Array(1, 2, 3, 4, 5);

// Empty array
const empty = [];

// Mixed types (though not recommended)
const mixed = [1, 'hello', true, { name: 'John' }];
```

### Accessing Array Elements

```javascript
const colors = ['red', 'green', 'blue', 'yellow'];

console.log(colors[0]);    // 'red' (first item)
console.log(colors[2]);    // 'blue' (third item)
console.log(colors.length); // 4
console.log(colors[colors.length - 1]); // 'yellow' (last item)
```

### Basic Array Operations

```javascript
const fruits = ['apple', 'banana'];

// Add to end
fruits.push('orange');
console.log(fruits); // ['apple', 'banana', 'orange']

// Remove from end
const last = fruits.pop();
console.log(last);   // 'orange'
console.log(fruits); // ['apple', 'banana']

// Add to beginning
fruits.unshift('mango');
console.log(fruits); // ['mango', 'apple', 'banana']

// Remove from beginning
const first = fruits.shift();
console.log(first);  // 'mango'
console.log(fruits); // ['apple', 'banana']
```

## The Seven Essential Array Methods

These methods are the foundation of data manipulation in JavaScript. Master these, and you'll handle 95% of your data transformation needs.

### 1. map() - Transform Every Item

**When to use:** You need to create a new array with each item transformed.

Think of `map()` as an assembly line. Every item goes in, gets modified, and comes out changed.

```javascript
// Get all user names from user objects
const users = [
  { id: 1, name: 'Sarah', age: 28 },
  { id: 2, name: 'Mike', age: 34 },
  { id: 3, name: 'Emma', age: 25 }
];

const names = users.map(user => user.name);
console.log(names); // ['Sarah', 'Mike', 'Emma']

// Add tax to prices
const prices = [19.99, 29.99, 49.99];
const withTax = prices.map(price => (price * 1.13).toFixed(2));
console.log(withTax); // ['22.59', '33.89', '56.49']

// Transform objects
const userSummaries = users.map(user => ({
  name: user.name,
  isAdult: user.age >= 18
}));
```

**Key insight:** `map()` always returns a new array with the **same length** as the original. Every item gets transformed.

### 2. filter() - Keep Only What You Need

**When to use:** You need a new array containing only items that meet certain criteria.

```javascript
// Show only active users
const users = [
  { name: 'John', active: true, age: 30 },
  { name: 'Jane', active: false, age: 25 },
  { name: 'Bob', active: true, age: 35 }
];

const activeUsers = users.filter(user => user.active);
console.log(activeUsers);
// [{ name: 'John', active: true, age: 30 }, 
//  { name: 'Bob', active: true, age: 35 }]

// Find adults (over 18)
const ages = [12, 18, 25, 16, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults); // [18, 25, 30]

// Complex filtering
const products = [
  { name: 'Laptop', price: 999, inStock: true },
  { name: 'Phone', price: 699, inStock: false },
  { name: 'Tablet', price: 399, inStock: true }
];

const affordable = products.filter(p => p.price < 500 && p.inStock);
console.log(affordable); // [{ name: 'Tablet', price: 399, inStock: true }]
```

**Key insight:** `filter()` returns a new array that's usually **shorter** than the original. Items either pass the test or they don't.

### 3. reduce() - Combine Everything Into One Value

**When to use:** You need to take an array and calculate a single result from all items.

This is the most powerful but also the most misunderstood method. Think of it as a snowball rolling downhill, collecting more snow with each item.

```javascript
// Calculate total price in shopping cart
const cart = [
  { item: 'Phone', price: 599 },
  { item: 'Case', price: 29 },
  { item: 'Charger', price: 39 }
];

const total = cart.reduce((sum, product) => sum + product.price, 0);
console.log(total); // 667

// Find maximum value
const numbers = [5, 12, 8, 130, 44];
const max = numbers.reduce((highest, num) => 
  num > highest ? num : highest
, numbers[0]);
console.log(max); // 130

// Count occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // { apple: 3, banana: 2, orange: 1 }

// Group by category
const products = [
  { name: 'Laptop', category: 'Electronics' },
  { name: 'Shirt', category: 'Clothing' },
  { name: 'Phone', category: 'Electronics' }
];

const grouped = products.reduce((acc, product) => {
  const category = product.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(product);
  return acc;
}, {});
```

**Key insight:** `reduce()` has two parameters:
- **accumulator**: The running total/result (starts with the second argument)
- **current item**: The item being processed

### 4. find() - Get the First Match

**When to use:** You need to locate one specific item in an array.

```javascript
// Find user by ID
const users = [
  { id: 1, name: 'Sarah' },
  { id: 2, name: 'Mike' },
  { id: 3, name: 'Emma' }
];

const user = users.find(user => user.id === 2);
console.log(user); // { id: 2, name: 'Mike' }

// Find first available seat
const seats = [
  { number: 1, available: false },
  { number: 2, available: true },
  { number: 3, available: true }
];

const firstAvailable = seats.find(seat => seat.available);
console.log(firstAvailable); // { number: 2, available: true }
```

**Key insight:** `find()` stops searching as soon as it finds a match. Returns `undefined` if nothing matches.

### 5. some() - Check If ANY Item Matches

**When to use:** You need to know if at least one item meets a condition.

```javascript
// Check if cart has any expensive items
const cart = [
  { item: 'Pen', price: 2 },
  { item: 'Laptop', price: 1200 },
  { item: 'Notebook', price: 5 }
];

const hasExpensiveItem = cart.some(item => item.price > 1000);
console.log(hasExpensiveItem); // true

// Check if any user is admin
const users = [
  { name: 'John', role: 'user' },
  { name: 'Sarah', role: 'admin' },
  { name: 'Mike', role: 'user' }
];

const hasAdmin = users.some(user => user.role === 'admin');
console.log(hasAdmin); // true
```

**Key insight:** `some()` returns true or false. It stops checking as soon as it finds one match.

### 6. every() - Check If ALL Items Match

**When to use:** You need to verify that every single item meets a condition.

```javascript
// Check if all users are adults
const users = [
  { name: 'John', age: 25 },
  { name: 'Sarah', age: 30 },
  { name: 'Mike', age: 22 }
];

const allAdults = users.every(user => user.age >= 18);
console.log(allAdults); // true

// Verify all required fields are filled
const formFields = [
  { name: 'email', value: 'test@email.com' },
  { name: 'password', value: 'secret123' },
  { name: 'username', value: 'john_doe' }
];

const allFilled = formFields.every(field => field.value.length > 0);
console.log(allFilled); // true
```

**Key insight:** `every()` returns true only if **ALL** items pass the test. One failure means false.

### 7. forEach() - Do Something With Each Item

**When to use:** You want to perform an action for each item but don't need a new array.

```javascript
// Log each item
const fruits = ['apple', 'banana', 'orange'];
fruits.forEach(fruit => console.log(fruit));

// Update UI for each product
const products = [
  { name: 'Laptop', price: 999 },
  { name: 'Mouse', price: 25 }
];

products.forEach(product => {
  console.log(`${product.name}: $${product.price}`);
});

// Accumulate side effects
let total = 0;
const prices = [10, 20, 30];
prices.forEach(price => total += price);
console.log(total); // 60
```

**Key insight:** `forEach()` doesn't return anything. Use it for side effects, not transformations.

## Quick Decision Guide: Which Method to Use?

| Need | Method |
|------|--------|
| New array with transformed items | `map()` |
| New array with fewer items | `filter()` |
| Calculate one value from many | `reduce()` |
| Do something with each item | `forEach()` |
| Find one specific item | `find()` |
| Check if ANY item matches | `some()` |
| Check if ALL items match | `every()` |

## Chaining Methods: Combining Powers

The real magic happens when you chain methods together:

```javascript
// Calculate total revenue from completed orders
const orders = [
  { id: 1, amount: 50, status: 'completed' },
  { id: 2, amount: 75, status: 'pending' },
  { id: 3, amount: 100, status: 'completed' },
  { id: 4, amount: 30, status: 'cancelled' }
];

const totalRevenue = orders
  .filter(order => order.status === 'completed')  // Keep only completed
  .map(order => order.amount)                     // Extract amounts
  .reduce((sum, amount) => sum + amount, 0);      // Add them up

console.log(totalRevenue); // 150

// Get names of adult users, sorted alphabetically
const users = [
  { name: 'Charlie', age: 17 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 }
];

const adultNames = users
  .filter(user => user.age >= 18)
  .map(user => user.name)
  .sort();

console.log(adultNames); // ['Alice', 'Bob']
```

**Read chains from top to bottom**—each method transforms the data for the next one.

## Objects: Storing Related Data

Objects store data as key-value pairs. Unlike arrays (which use numbered indexes), objects use named properties.

### Creating Objects

```javascript
// Object literal (most common)
const user = {
  name: 'Sarah',
  age: 28,
  email: 'sarah@email.com',
  isActive: true
};

// Accessing properties
console.log(user.name);        // 'Sarah' (dot notation)
console.log(user['email']);    // 'sarah@email.com' (bracket notation)

// Adding properties
user.city = 'New York';
user['country'] = 'USA';

// Updating properties
user.age = 29;

// Deleting properties
delete user.isActive;
```

### Nested Objects

```javascript
const person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    zip: '10001'
  },
  hobbies: ['reading', 'coding', 'gaming']
};

console.log(person.address.city);      // 'New York'
console.log(person.hobbies[0]);        // 'reading'
```

### Object Methods

```javascript
const calculator = {
  value: 0,
  add(num) {
    this.value += num;
    return this;
  },
  subtract(num) {
    this.value -= num;
    return this;
  },
  getValue() {
    return this.value;
  }
};

calculator.add(10).add(5).subtract(3);
console.log(calculator.getValue()); // 12
```

## Destructuring: Extracting Values Elegantly

Destructuring lets you extract values from arrays and objects cleanly.

### Array Destructuring

```javascript
const colors = ['red', 'green', 'blue'];

// Instead of this:
const first = colors[0];
const second = colors[1];

// Do this:
const [first, second, third] = colors;
console.log(first);  // 'red'
console.log(second); // 'green'

// Skip items
const [primary, , tertiary] = colors;
console.log(tertiary); // 'blue'

// With default values
const [a, b, c, d = 'yellow'] = colors;
console.log(d); // 'yellow'

// Rest operator
const [head, ...tail] = colors;
console.log(head); // 'red'
console.log(tail); // ['green', 'blue']
```

### Object Destructuring

```javascript
const user = { name: 'Sarah', age: 28, city: 'NYC' };

// Instead of this:
const name = user.name;
const age = user.age;

// Do this:
const { name, age, city } = user;
console.log(name); // 'Sarah'

// Rename variables
const { name: userName, age: userAge } = user;
console.log(userName); // 'Sarah'

// With defaults
const { name, age, country = 'USA' } = user;
console.log(country); // 'USA'

// Nested destructuring
const person = {
  name: 'John',
  address: {
    city: 'NYC',
    zip: '10001'
  }
};

const { address: { city, zip } } = person;
console.log(city); // 'NYC'
```

## Spread Operator: Copying and Combining

The spread operator (`...`) expands arrays and objects.

### With Arrays

```javascript
// Copy array
const original = [1, 2, 3];
const copy = [...original];

// Combine arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4]

// Add items
const numbers = [2, 3, 4];
const moreNumbers = [1, ...numbers, 5]; // [1, 2, 3, 4, 5]
```

### With Objects

```javascript
// Copy object
const user = { name: 'John', age: 30 };
const userCopy = { ...user };

// Combine objects
const defaults = { theme: 'dark', notifications: true };
const userSettings = { theme: 'light' };
const finalSettings = { ...defaults, ...userSettings };
console.log(finalSettings);
// { theme: 'light', notifications: true }

// Add properties
const person = { name: 'Sarah' };
const employee = { ...person, role: 'Developer', salary: 80000 };
```

**Important:** Spread creates shallow copies. Nested objects are still referenced.

## JSON: JavaScript Object Notation

JSON is how we send data over the internet. It looks like JavaScript objects but with strict rules.

### JSON Rules

1. Property names must be in double quotes
2. No trailing commas
3. Only supports: strings, numbers, booleans, arrays, objects, null
4. No functions, undefined, or dates

```javascript
const user = {
  name: 'Sarah',
  age: 28,
  hobbies: ['reading', 'coding']
};

// Convert to JSON string
const jsonString = JSON.stringify(user);
console.log(jsonString);
// '{"name":"Sarah","age":28,"hobbies":["reading","coding"]}'

// Convert back to object
const parsedUser = JSON.parse(jsonString);
console.log(parsedUser.name); // 'Sarah'

// Pretty printing
const pretty = JSON.stringify(user, null, 2);
console.log(pretty);
/*
{
  "name": "Sarah",
  "age": 28,
  "hobbies": [
    "reading",
    "coding"
  ]
}
*/
```

## Real-World Patterns

### Pattern 1: Transform API Response

```javascript
// API gives you this:
const apiResponse = {
  data: [
    { id: 1, first_name: 'John', last_name: 'Doe', age: 30 },
    { id: 2, first_name: 'Jane', last_name: 'Smith', age: 25 }
  ]
};

// Transform to what your app needs:
const users = apiResponse.data.map(user => ({
  id: user.id,
  fullName: `${user.first_name} ${user.last_name}`,
  age: user.age,
  isAdult: user.age >= 18
}));
```

### Pattern 2: Remove Duplicates

```javascript
// Method 1: Using Set
const numbers = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(numbers)];

// Method 2: For objects (based on property)
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 1, name: 'John' }
];

const uniqueUsers = users.filter((user, index, self) =>
  index === self.findIndex(u => u.id === user.id)
);
```

## Common Mistakes to Avoid

### 1. Mutating Original Arrays

```javascript
// ❌ Wrong - mutates original
const numbers = [1, 2, 3];
numbers.push(4);

// ✅ Right - creates new array
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
```

### 2. Forgetting Return in map/filter

```javascript
// ❌ Wrong - no return
const doubled = numbers.map(n => { n * 2 });

// ✅ Right
const doubled = numbers.map(n => n * 2);
```

### 3. Using forEach When You Need a New Array

```javascript
// ❌ Wrong
const doubled = numbers.forEach(n => n * 2);

// ✅ Right
const doubled = numbers.map(n => n * 2);
```

## Summary

**Arrays** are ordered lists perfect for collections of similar items.

**Key methods:**
- `map()` - Transform items
- `filter()` - Keep matching items
- `reduce()` - Combine into one value
- `find()` - Get first match
- `some()` / `every()` - Check conditions

**Objects** store related data as key-value pairs.

**Modern features:**
- Destructuring - Extract values cleanly
- Spread operator - Copy and combine
- JSON - Convert for APIs

Master these tools and you'll handle 90% of data manipulation in JavaScript!