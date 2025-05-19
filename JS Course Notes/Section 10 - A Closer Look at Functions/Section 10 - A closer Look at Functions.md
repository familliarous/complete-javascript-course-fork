
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