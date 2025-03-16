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
- 