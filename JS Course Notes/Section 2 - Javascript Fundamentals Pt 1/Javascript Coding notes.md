
# [11/03/2025] Notes

- The developer console in modern browsers are just an environment to mostly execute pieces of code.
- Website Content should be separate from the JS logic. Inline JS is only good for short lines of code
- **VALUE** - smallest unit of information in JS. Stored in Variables

# JS Conventions

- **Standard JS case convention- camelCase**
- **Standard variable naming conventions as well: No var names starting with numbers, special characters. Only underscore, numbers, letters and dollar sign. No JS keywords either**
- name is a JS keyword, but can be used. Just don't to avoid complications
- Constants are all caps
- variable names should be descriptive.

# The 7 Primitive Data Types

### JS has Dynamic Typing, meaning you do not have to define the datatype stored in the variable.

The **VALUE** has the type, NOT the variable.

- Number - FLOATING POINT numbers (decimals and integers)
- String - Sequence of chars, used for text
- Boolean - Logical type, can only be true or false 
- Undefined - Value taken by a variable, not defined yet ('empty value')
- Null - Also empty value
- Symbol (ES2015) - Value that is unique and cannot be changed
- BigInt(ES2020) - Larger integers than the Number type can hold.

> **NOTE:** for some reason, **null** is considered by Javascript as an **Object** type. This is a bug.

- let and const were introduced in ES6 (Modern JS)
- var was the old way of declaring variables.

>**NOTE:** variables should be **CONST BY DEFAULT** unless you are ABSOLUTELY SURE this value will change in the future.

> **NOTE:** var and let have differences: let is block-scoped, var is function-scoped. Basically, you should never use var. By default, if you don't specify the variable type, java will create a property on a global object

# Operators

> **NOTE:** logging multiple console values: just separate each value with a comma

- Exponents:  \** (2 ** 3 = 8)
- PreIncrement and PostIncrement: ++value, value++
- PreDecrement and PostDecrement: --value, value--

Comparison

- Less than <
- More than >
- Less than or Equal to <=
- More than or Equal to >=

# [12/03/2025] Notes

# Operator Precedence

**MDN Docs:**

>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

- Math operations follow PEMDAS 
- In order of precedence: \*, /, +, -
- Comparison Operators have lower priority than math
- Equality operators have lower priority than comparison.
- Assignment operations have a high priority.
- Assignment operations are RIGHT - TO - LEFT:
- If it were left to right, the leftmost variable will likely be assigned to an uninitialized variable value
- Grouping () has the highest priority

> **Performed Coding Challenge # 1. Skipped the rest**

# Strings and Template Literals

- Javascript String Literals "" 
- JS auto casts numbers into strings when concatenating

- **Template Literals are denoted by BACKTICKS (\`\`)** 
- In order to add variables to the string template, {} needs to be prepended, e.g. \`${test}\`
- Backticks take new lines, \n\\.
- You can also enter a new line inside the IDE and it will be reflected within the text inside the backticks.

# Type Conversion and Coercion

- Type conversion - Converting from one type to another
- Type coercion - JS implicitly converting types 
- In order to perform conversion, you need to perform CASTING 
- Casting example:
```
const testYear = 1991;
console.log(Number(testYear))
```
- Converting a string into Number will return a NaN, which is still of type Number.
- Numbers can also be converted into a string.
- You cannot convert into null or undefined
- Boolean conversion is handled differently


- Type coercion happens when JS finds 2 values with different types.
- In the event of string concatenation, number values will be converted to string.
- math operators that aren't addition will trigger the opposite conversion if the value is proper, for example:
```
('10' - '2' - 10); // returns 89-2
```

- The last operand will determine the coercion type.
- Although this may be the case, relying on type coercion is bad

### Truthy and Falsy values 

- Falsy values: 0, '', undefined, null, NaN
- Anything inside a control block (if else) condition will be converted into a boolean. For example, if a Num is 0, it's falsy. 

# [13/03/2025] NOTES

### Equality Operators: == vs ===

- the strictly equal === operator will only return true IF both sides are equal.
- Example: `18 === 18 // True`
- the loosely equal == operator returns true if the value, when type coerced, equals the other value.
- Example: `'18' == 18 // True`
- **Avoid the loose equality operator as much as you can**
- There also has a strict and loose version of non equal values:
- !== and !=.
### Prompt Function

prompt("What's your favorite number?")
- Prompt allows for the browser prompt to be displayed

### Boolean Logic

- NOT operator has higher precedence than OR or AND.
### Logical Operators

- && , || , and !
### Switch Statements

sample syntax:

```
switch (day) {

case 'Monday':
	console.log('Today is Monday')
	break;
case 'Tuesday':
	console.log('Today is Tuesday')
	break;
default:
	console.log('Somehow today is an invalid day')
}
```

- Remember, without break, the cases proceeding the correct break will be triggered, as long as the other cases also have no break.
- Strict comparison is done for each case.

# Statements and Expressions 

- An **Expression** is a statement that produces a value, e.g.
```
3 + 4 // Is an expression, produces 7
```

- A **Statement** is a full declaration of action sequences, e.g.:

```
const str = '23 is a number' // Is a statement, you define a variable and a value, and assign the value to a variable
```

# Ternary Operator

- The ternary operator is an operator with three parts: condition, if and else:
```
age >= 18 ? console.log('I can drink ALCOHOL!') : console.log('I can't drink alcohol yet.')
```
- The ternary operator is an **EXPRESSION**!
```
console.log(`I like to drink. ${age >= 18 ? console.log('I can drink ALCOHOL!') : console.log('I can't drink alcohol yet.')}`)
```


### Javascript brief history:

- Brendan Eich created the first JS version in 10 days, Called "Mocha"
- JS was named JAVAScript to attract Java devs, but has nothing to do with java
- JS has been made to be backwards compatible with old JS code from 1997!
- "Don't Break The Web!" <--- Java only adds, and doesn't deletes.

### Development:

- During Dev, Simply use any modern browser.
- During production, use Babel to transpile and polyfill your code (converting back to ES5 to ensure browser compatibility for all users).
- ES5 Supports ALL Browsers down to IE 9 from 2011;
- ES6 does not support older browsers.
- ESNext are future versions of the language.
- **BABEL** is 