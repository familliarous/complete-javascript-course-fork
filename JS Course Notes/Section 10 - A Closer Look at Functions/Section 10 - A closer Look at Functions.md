
# [18/05/2025] NOTES

# 133. Section Intro

- More on functions
# 134. Section Roadmap

- ![[Pasted image 20250519164001.png]]
# 135. Default Parameters

You can use enhanced object literal syntax for passing function parameters to an object.

```
// Syntax:
const createBooking = function (flightNum, numPassengers, price) {

  const booking = {

    flightNum,

    numPassengers,

    price,

  };

  console.log(booking);

  bookings.push(booking);

};
```


# 136. How Passing Arguments Works: Value vs Reference
> Note: Javascript **DOES NOT HAVE PASS BY REFERENCE**; only **Pass by Value!**

# 137. First-Class Vs. Higher-Order Functions

- Functions are just another type of Objects in JS
- Hence, they are values
- So you can also pass functions to other functions.
- You can also RETURN a function from another function.

### Higher-order functions
- A function that receives another function as an argument, that returns a new function, or **both**
- This is only possible because of first-class functions.
ex.:

```
const greet = () => console.log('Hey Jonas');
btnClose.addEventListener('click', greet)
```

### Functions that return new functions
ex.:
```
function count() { // <---  Higher order function
	let counter = 0;
	return function() { // <--- Returned function
		counter++;
	}
}
```


# 138. Functions Accepting Callback Functions

- You can apply abstraction via callback functions.  You can obscure the functionality of most of your code by passing them through other functions. Of course, you need proper justification for choices like these.

# 139. Functions Returning Other Functions

```
const greet = function (greeting) {

  return function (name) {

    console.log(`${greeting} ${name}`);

  };

};

  

// Works because of Closures (HIGHLY MISUNDERSTOOD TOPIC)

const greeterHey = greet('Hey');

greeterHey('Jonas');

greeterHey('Steven');
```

- Works because of JS Closures
```
greet('Hello')('Jonas'); // passes hello as greeting, jonas as name
```

# 140. The call and apply Methods

- call and apply are two ways to apply functions into a more closed context (like catering to separate objects)  

### Call method

Syntax:
```
// function.call(<object that will call function>, <parameters of function...>)
book.call(eurowings, 23, 'Monoco');

console.log(eurowings);
```

### Apply method

- Similar to call, but instead of taking in parameters of the function, it takes an array of arguments.
Syntax:
```
const flightData = [583, 'George Cooper'];

book.apply(swiss, flightData);

console.log(swiss); // George Cooper booked a seat on Swiss Air Lines flight LX583
```

- Not used that much anymore because using .call() with spread operator works the same:
```

book.call(swiss, ...flightData);
```

# [21/05/2025] NOTES

# 141. The bind method

- The bind method works a lot like call, but it returns a function with the this keyword set to the object you define in its parameters:
```
const bookEw = book.bind(eurowings); // bind returns a new function
```


# [25/05/2025] NOTES
# 143. Immediately Invoked Function Expressions (IIFE)

- Syntax:
```
  

// wrap function in parenthesis

(function () {

  console.log('This will never run again...');

})();

  

// same goes for arrow

  

(() => {

  console.log('This will ALSO never run again...');

})();
```

- Why use these? 
	- Useful for await and async.


# 144. Closures

- How does this work?
	- When a function returns another function, it transfers its variable context to the variable it is assigned to--therefore transferring its variable context to the execution context of thnew variable. The old execution context for the returning function is removed from the global EC.
	- The variable environment popped off the stack after the returning function finished executing.
	- Because of **closures**, the Variable Environment was **moved up** to the heap and **NOT** garbage collected.
	- Any function that was created under the execution context of its creator (booker(), in this case, was created in the context of secureBooking. So it will always have access to the variable environment of secureBooking.)

- This link between secureBooking and booker via the secureBooking's Variable Environment is the **closure.**
- Syntax:
```
const secureBooking = function () {

  let passengerCount = 0;
  
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking(); // global context
booker(); 
``` 

- A **closure** is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone;
- a closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.

- Closures are automatically made by JS and it is an internal property of a function.

# 145. More closure examples