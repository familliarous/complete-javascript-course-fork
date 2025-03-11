
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
- 