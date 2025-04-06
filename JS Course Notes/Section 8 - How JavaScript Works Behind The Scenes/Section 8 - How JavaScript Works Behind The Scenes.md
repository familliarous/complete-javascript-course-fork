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