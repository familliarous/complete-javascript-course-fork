
# [26/05/2025] NOTES

# 149. Simple Array Methods

- splice() - modifies the array, and removes existing elements based on the parameter given (index)
- reverse() - modifies the array by reversing its contents' order. 
- concat() - joins the contents of two arrays together.
- join() - can also be done with the spread operator (...). Joins the values of an array into one String, separated by whatever character you put in the parameter.

# [27/05/2025] NOTES

# 150. The New at Method

- Syntax: 
```
const arrNew = [23, 11, 64];

  

console.log(arr[0]);

console.log(arr.at(0)); // the same as indexing [0].

  

// why use this if it's just similar?

// use cases: getting the last element

console.log(arr[arr.length - 1]);

console.log(arr.slice(-1)[0]);

console.log(arr.at(-2));

  

// you can use this for strings also:

console.log('jonas'.at(0));
```

# 151. Looping Arrays: forEach

- Syntax: