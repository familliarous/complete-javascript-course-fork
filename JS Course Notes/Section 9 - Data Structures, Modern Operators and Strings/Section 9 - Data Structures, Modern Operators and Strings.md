
# [21/04/2025] NOTES

# 108. Destructuring Arrays 

- Destructuring - Breaking down a larger Data Structure into separate variables
- Destructuring an array - done in demo:
```
const [x, y, z] = arr; // <-- Destructuring  Assignment, assign array elements from an existing array object to individual variables


```
- Nested Destructuring - done in demo:
```
const nested = [2, 4, [5, 6]];

const [i, , j] = nested;

console.log(i, j); // 2, [5, 6]

const [l, , [m, n]] = nested;

console.log(l, m, n); // 2, 5, 6

```

- Setting default values for destructuring (USEFUL FOR API):
```

const [p = 3, q = 2, r = 1] = [8, 9];

console.log(p, q, r); // 8, 9, 1

```
# [22/04/2025] NOTES

# 109. Practice Assignments

- TODO in own time

# 110. Destructuring Objects

- object order doesn't matter so when destructuring entire objects, you don't need to skip over:
```
const { name, openingHours, categories } = restaurant; // <- this is valid
console.log(name, openingHours, categories); // Classico Italiano

Object { thu: {…}, fri: {…}, sat: {…} }
fri: Object { open: 11, close: 23 }


sat: Object { open: 0, close: 24 }


thu: Object { open: 12, close: 22 }


<prototype>: Object { … }

Array(4) [ "Italian", "Pizzeria", "Vegetarian", "Organic" ]
```


# [27/04/2025] NOTES

# 111. The Spread Operator


```
const arr = [7, 8, 9];

const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

console.log(badNewArr);

const newArr = [1, 2, ...arr];

console.log(newArr);
```

- In the upper syntax, the spread operator spreads the arr array out into individual elements.

```
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
```

- ^^ This will only add more elements to the newMenu array and it does not modify anything.
- The spread operator does not create new variables and only takes an array's contents.

- Making shallow and deep copies out of  the spread operator is one of its use cases
- Shallow Copy:
```
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
```
- Deep Copy: 


- **Iterables**
	- Arrays
	- Strings
	- Maps
	- Sets
	- **NOT OBJECTS!**
```
console.log(`${...str} Schmedtmann`);
```

- ^^Does not expect multiple values separated by a comma, so does not work

- ES 2018 - Objects can now use the spread operator despite not being an iterable