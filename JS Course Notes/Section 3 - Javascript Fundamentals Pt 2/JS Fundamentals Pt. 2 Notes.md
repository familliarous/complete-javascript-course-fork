# [16/03/2025] NOTES

# Strict Mode
## What is Strict Mode?

- Strict mode is a literal expression that will prevent devs for making some mistakes, i.e. using undeclared variables
- You can use Strict mode in a local scope as well.

## Why Strict Mode?

- To make it easier to write "secure" JavaScript.
- It also changes "bad syntax" previously accepted by JS into ACTUAL ERRORS
- Basically strict mode will make finding and fixing code bugs easier by throwing typical errors as expected of other programming languages like Java.
## Activating Strict Mode

Strict Mode Keyword:

```
'use strict'
```

**NOT** allowed in strict mode:

```
// Will throw an error:

x = 3.14; // <- undeclared

```

# Functions

structure of a function: 

```
function logger() {  }
```

- Make function names Descriptive
- Again, Don't Repeat Yourself (DRY)

## Anonymous Functions

- Considered as EXPRESSIONS
- Syntax of Function Expression:
```
const test = function (birthYear) {
	return 2037 - birthYear;
}
```
- Functions are **VALUES**, not TYPES

## Function Expressions vs Function Declarations:

- You can call function declarations before they are defined in the code--this cannot be done with expressions.
- This process is called **Hoisting**
- You can choose either way according to preference, but function expressions force a "functionality-first" approach due to its declarative nature

## Arrow Functions

- Added in ES6, the arrow function is a function expression that is shorter and faster to write.
- This is its structure:
```
birthYear => 2037 - birthYear;
```
- Mostly used for single-line functions.
- But can also be multi line:
```
birthYear => {
	const age = 2037 - birthYear;
}
```

- You can also wrap parameters to it this way:
```
const yearsUntilRetirement = (birthYear, firstName) => {
	const age = 2037 - birthYear;
	const retirement = 65 - age;

	return `${firstName} retires in ${retirement} years`;
}

```

- Arrow functions CANNOT USE the **this** keyword.

## Functions Calling Other Functions

- Simply Separation of Concerns and Don't Repeat Yourself.

## Review

> **The three types of functions**
- Function Declaration (Can be used before declared)
- Function expression (Essentially a function value stored in a variable)
- Arrow function (Good for one-liners; Has no this keyword.)

# [17/03/2025] NOTES

# Introduction to Arrays

- JS has 2 major Data Structures -- **Arrays and Objects**.
```
// Initializing an array:

const friends = ['Michael', 'Steven', 'Peter'];
```

> **Note:** JS expects an EXPRESSION inside the brackets when calling an array index.


- You can also initialize an Array using the Array constructor:

```
const friends = new Array(1991, 1992, 1993);
```

> **Note:** Array elements are MUTABLE because they are not PRIMITIVES. On the other hand, you cannot change the value of an entire array variable itself if it's const.

# Basic Array Operations (Methods)

- Push - pushes an element into the array's end. Returns the new length after adding the element.
- Pop - pops the last element in the array. Also returns the new length after removal.

```
const newLength = friends.push('Jay');
console.log(newLength) // 4
console.log(friends) // ["Michael", "Steven", "Peter", "Jay"]
```

- Unshift - pushes an element into the array's front. Also returns the new length.
- Shift - removes the elements at the array's front. Also returns the new length after removal.

```
const newLength = friends.unshift('John');
console.log(newLength) // 5
console.log(friends) // ["John", "Michael", "Steven", "Peter", "Jay"]
```

> **Note:** trying to access an element not in an array will return its index as -1.

- Includes - returns a boolean. Checks if an element is inside an array

```
console.log(friends.includes('Steven')) // true
```

# Objects 

Objects in JS are data structures that operate with a key-value pair.

```
// Sample Object Literal Syntax:

const jonas = {
	firstName: 'Jonas',
	lastName: ' Schmedtmann',
	age: 2037 - 1991,
	job: 'teacher',
	friends: ['Michael', 'Jonas', 'Peter']
};

```

> **Note:** Arrays vs Objects: When using arrays, it is more for unstructured data, while Objects are structured, or when you need to access specific key-value pairings.


# [18/03/2025] NOTES

# Dot vs. Bracket Notation

Objects can be called 2 ways. 

Brackets:
```
const nameKey = 'Name';
console.log(jonas['first' + nameKey]) // Jonas
console.log(jonas['last' + nameKey]) // Schmedtmann
```

Dots:
```
jonas.location = 'Portugal';
console.log(jonas.location); // Portugal
```

# Object Methods

You can also insert methods inside objects, specifically a method **expression**:

```
const jonas = {
	firstName: 'Jonas',
	lastName: 'Schmedtmann',
	birthYear: 1991,
	job: 'Teacher',
	friends: ['Michael','Peter','Steven],
	hasDriversLicense: true,

	calcAge: function (birthYear) {
		return 2037 - birthYear;
	}
};

console.log (jonas.calcAge(1991));
```

Using the **this** keyword:

```
console.log(jonas)
```

# The For Loop

Syntax:
```
for(let rep = 1; rep <= 10; rep++) {
	console.log(`a For Loop looping 10 times!);
}
```

Continue - will skip an iteration.
```
for(let rep = 1; rep <= 10; rep++) {
	if (condition) {
		continue; // Skips to next iteration, if condition has not yet been met
	}
}
```
Break - will break outside the entire loop.

```
for(let rep = 1; rep <= 10; rep++) {
	if (condition) {
		break; // Exits the loop entirely
	}
}
```

> **Note:** While loops can be more versatile than for loops.