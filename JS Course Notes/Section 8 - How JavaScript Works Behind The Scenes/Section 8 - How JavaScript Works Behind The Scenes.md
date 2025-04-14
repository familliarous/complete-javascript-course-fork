# [03/04/2025] NOTES

# 91. A High-Level Overview of JavaScript:

- JS is HIGH-LEVEL where resources are dynamically handled
- Javascript is JIT-compiled - JS Code is compiled into machine code in real time.
- Multi-paradigm - You can program in JS either in procedural, oop or functional programming.
- First-Class functions - Functions are treated like variables (function expressions)
- Prototype-based object-oriented - Objects are created via prototypal inheritance, e.g. Arrays being able to use push()
- Dynamic - JS is a dynamic language, which infers the type of a variable from its value.
- Non-blocking event loop 
	- Concurrency model - how JS engine handles concurrency
	- JS runs in a single thread
	- Event loops are used to run longtime tasks--executes them in the background and puts them back into the main thread when finished.

# [04/06/2025] NOTES

# 92. The JavaScript Engine and Runtime

- JS Engine - Program that executes JS Code.
	- Each Browser has its own JS Engine. 
	- V8 powers google chrome and Node JS.
	- Spidermonkey powers Mozilla
	- Call Stack - Where code is executed
	- Heap Stack - Objects in memory
	
- Interpretation vs Compilation
	- Compilation - Source code is compiled first into machine code, which is executable and portable.
	- Interpretation - source code is executed line-by-line by the interpreter
	- Just-In-Time (JIT) Compilation - Entire code is converted into machine code at once then executed immediately
- JS Modern Just-in-time compilation:
	- Parsing -> Compilation -> Execution
- Global Window Object allows JS to access the WEB API's.
- Callback Queue - contains all the callback functions that are ready to be executed (e.g. click(), timer(), etc.)

# 93. Execution Contexts and the Call Stack

- Execution context - An environment where a piece of JS is executed.
	- JS code always runs in an execution context.
- JS Execution sequence:
	- Creation of global execution context -> Execution of top-level code -> Execution of functions and waiting for callbacks
- Variable environment - contains all variables, let, const, and var declarations, as well as an arguments object
- Scope chain and this keyword is included inside execution context
- **Arrow functions DO NOT have a this keyword nor an arguments object!**

# [07/04/2025] NOTES

# 94. Scope And The Scope Chain

-   Lexical Scoping - Scoping wherein the scope is controlled by the placement of functions and blocks in code
- JS also has global and function scopes
- Scoping asks the question "Where do variables live?" or "Where can we access a certain variable and where not?"
- Only let and const variables are scoped 
- The scope chain has nothing to do with the order in which functions are called.

# 95. Scoping in Practice 

- SKIPPED

# 96. Variable Environment: Hoisting and The TDZ

- Hoisting - Makes some types of variables accessible/usable in the code before actually being declared.
	- Before exec, the code is scanned for var declarations, and for each var, a new property is created in the variable environment object.
- Sample: 
	- Function declarations are hoisted, with its initial value being the actual function
	- var variables are also hoisted, with initial values being undefined if accessed before they are declared
	- let or const vars are  called before declared are put in the **Temporal Dead Zone (TDZ)**, hence there will be errors.
	- function expressions and arrows depend on if using var or const.

# 97. Scoping in Practice

- SKIPPED

# [08/04/2025]

# 98. Variable Environment: Hoisting and the TDZ

- Temporal Deadzones - areas of code where a variable is called before its definition.

# 99. Hoisting and TDZ in practice

- Hoisting functions works for *function* declarations, but not for const variables or arrow functions
- When checking for truthy values, hoisting a function declaration in cooperation with var declarations can lead to bugs wherein the var value is used as a condition to run a hoisted function declaration. 
- In the case where the var variable will return undefined once hoisted, it will return a falsy value, which will cause possible bugs done by pre-hoisting
- **Variables declared with VAR will create a global property on the JS Window object.**

# [13/04/2025] NOTES

# 100. The the Keyword

- The `this` keyword points to the execution context and points to the "owner" of the function which uses the `this` keyword.
- **this is NOT static.** It is dependent on the how the function is called, and the value is assigned only when the function is called.
- A simple function call in strict mode will allow a defined function to be called, but if not in strict mode, it will call a global Window variable matching the function name instead.
- Arrow functions **do not get their own `this` keyword**! Arrow functions are made to pick up the context from the outer lexical scope (their parent calling function).
- Event Listeners, when called `this` on, will call the DOM. It will not point to the function using it, nor the variable environment of the function.
- Other ways to call (later on):
	- new
	- call
	- apply
	- bind
- **NEVER use an arrow function as a method.**

- Functions inside methods can also cause a `this` keyword pitfall. Regular function calls have the this keyword undefined,