
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

# [28/04/2025] NOTES

# 112. Rest Pattern and Parameters

- spread operator is for unpacking arrays/objects, while REST pattern is for packing.
- Rest pattern example:
```
const [a, b, ...others] = [1, 2, 3, 4, 5];
// ...others is the REST pattern = packs 3,4,5 in the array others.
```

- There should only ever be one REST pattern in any destructuring assignment.

- Takeaways:
	- Spread is used when writing values separated by commas
	- Rest is used when writing variable names separated by commas

# 113. Short Circuiting (&& and ||)

- logical operators can use any data type
	- can also return any datatype
	- can also do SHORT CIRCUITING

- Short circuting - if 1st value is a truthy value, it will return that value without checking the 2nd.
```
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Returns Hello because it's the first "truthy" value
```

- AND Operator - Shortcuts when first value is FALSY
- OR Operator - Shortcuts when first value is TRUTHY

# [29/04/2025] NOTES

# 114. Nullish Coalescing Operator (??)

- ES2020 released
- Works with "Nullish" values (`null` or `undefined`) 
- Will only short circuit nullish values, same behavior as && but fixes an issue with &&'s short circuiting

# 115. Logical Assignment Operators

- ||= - OR Assignment operator. Assigns a value to a variable if variable is currently falsy.
- ??= - Nullish Assignment Operator.  If var is nullish, it gets assigned.
- &&= - AND assignment operator. Assign a value to var if currently truthy. Otherwise it stays the same. Short circuits at the first sign of a truthy value.

# [06/05/2025] NOTES
# 116. CHALLENGE #1

- Nested Destructuring:
```
  const game = {

  team1: "Bayern Munich",

  team2: "Borrussia Dortmund",

  players: [

    [

      "Neuer",

      "Pavard",

      "Martinez",

      "Alaba",

      "Davies",

      "Kimmich",

      "Goretzka",

      "Coman",

      "Muller",

      "Gnarby",

      "Lewandowski",

    ],

    [

      "Burki",

      "Schulz",

      "Hummels",

      "Akanji",

      "Hakimi",

      "Weigl",

      "Witsel",

      "Hazard",

      "Brandt",

      "Sancho",

      "Gotze",

    ],

  ],

  score: "4:0",

  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],

  date: "Nov 9th, 2037",

  odds: {

    team1: 1.33,

    x: 3.25,

    team2: 6.5,

  },

};


const {

  odds: { team1, x: draw, team2 },

} = game; // This will result in the variables team1, draw, and team2 being filled with the values of the variables of the same names inside the game array.


  

console.log(odds.team1);
```

# 117. Looping Arrays: The for-of Loop

- Syntax:
```
for (const item of forLoopMenu) console.log(item);
```
- Similar to a for each loop, just replace **in** or **:** with **of**  


# 118. Enhanced Object Literals

- Syntax:

```
// ES6 Enhanced Object Literals
// If you declare a variableoutside an object literal, and you want to include that variable inside, you don't have to assign it anymore:

const test = 1;

const testEnhanced = {
	name: 1,
	test // This is inferred alreadyye
}
```


# [11/05/2025] NOTES

# 119. Optional Chaining

- Optional Chaining (.?) can prevent errors stemming from undefined properties being accessed by returning undefined if the property before the ? in the chain returns undefined.
- Syntax:
```
console.log(restaurant.openingHours.mon?.open); // only if mon exists, that's when open will be accessed. Otherwise, return undefined.
```

- Can also be used in Methods  and Arrays:

```
// Optional Chaining for Methods

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Optional Chaining for Arrays

const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

const users2 = [];

console.log(users[0]?.name ?? 'User array empty'); // Users has an element in index 0, so it displays the name

console.log(users2[0]?.name ?? 'User array empty'); // Users2 is empty so it outputs user array empty.
```


# [13/05/2025] NOTES

# Challenge # 2: Continuing the football betting app

- Complete.
- ALWAYS initialize your values

# 122. Sets

- Sets are an order of values
- Syntax:
```
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto','Pasta','Pizza'])
```
- Sets are also iterables
	- its elements are unique
	- order is irrelevant
- Strings ARE ITERABLES
```
const stringSet = new Set('Test') // outs 'T' 'e' 's' 't'
```

- Sets have NO INDEXES. There is no point of retrieving values in a set
- since sets are iterables you may use for of loops.
- Cool trick: Creating a new set from an array THEN turning that set into an array:
```
const setStaff = [...new Set(staff)]; // Destructures the Set into a new array
```

- Sets are NOT intended to replace arrays.
- It is only intended to use for unique sets of values.
 
# [14/05/2025] NOTES

# 123. New Operations to Make Sets Useful!

- Intersection - ONLY items that both sets have 
- Union - ALL items that either set has
- Difference - ONLY items unique to the calling set (mexicanFoods.difference(italianFoods) <- Mexican Foods is the calling set)
- Symmetric Difference - ONLY items unique to either sets (excludes items that both sets have)
- Is Disjoint From - Checks if sets are completely different.

# 124. Maps

- 