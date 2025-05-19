
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
