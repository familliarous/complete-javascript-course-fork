
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

- Syntax:
```
const rest = new Map();

rest.set("name", "Classico Italiano");

rest.set(1, "Firenze, Italy");

console.log(rest.set(2, "Lisbon, Portugal

// You can also chain .set calls:

rest

  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])

  .set("open", 11)

  .set("close", 23)

  .set(true, "We are open")

  .set(false, "We are closed");
```

# 125. Maps: Iteration

- Since Maps are iterables, You can use iterable functionality on them:
```
const question = new Map([

  ["question", "What is the best programming language in the world?"],

  [1, "C"],

  [2, "Java"],

  [3, "JavaScript"],

  ["correct", 3],

  [true, "Correct :)"],

  [false, "Try again!"],

]);

console.log(question.get("question"));

for (const [key, value] of question) {

  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);

}
```

# 126. Summary: Which Data Structure to use?

### Sources of Data

1. From the Program itself: Data written directly in source code
2. From the UI: Data input from the user or data written in DOM (tasks in todo app)
3. From external sources: Data fetched for example from web API (e.g. recipe objects)

### Other Built-in Datatypes for JS:

- WeakMap
- WeakSet

### Non-built-in:

- Stacks
- Queues
- Linked Lists
- Trees
- Hash Tables
### Decision : Do you need a simple list of values?

1. Simple list: **Arrays or Sets**
2. Key/Value Pairs: **Objects or Maps**

# Key Differences

### Arrays

- Use when you need ordered list of values (might contain duplicates)
- Use when you need to **MANIPULATE** data

### Sets

- Use when you need to work with unique values
- Use when high-performance is *really* important
- use to remove duplicates from arrays

### Objects 

- More "traditional" key/value stores ("abused" objects)
- Easier to write and access values with . and []

### Maps

- Better performance over objects
- Keys can have ANY data type
- easier to iterate
- easier to compute its size
- Use when you simply need to map keys to values
- use when you need keys that are **not** strings
# 127. Challenge # 3

- Finished.

# 128. Working with Strings Part 1

### String Methods of Note:

- Since Strings are arrays, you can index them:
```
console.log("B737"[0]); // "B"
```

- indexOf() returns the index of the **first** occurrence of the specified character:
```
const airline = "TAP Air Portugal";
console.log(airline.indexOf("r")); // 6th
```

- lastIndexOf() returns the index of the **last** occurrence of the specified character:
```
console.log(airline.lastIndexOf("r")); // 10th
```

- slice() returns the entire remaining string after the specified index:
```
console.log(airline.slice(4)); // 4th index: Air Portugal
console.log(airline.slice(1, -1)); // Beginning (1st index) to End (last index): AP Air Portuga
```


- Why Strings (which are primitives) able to use methods?
	- JS knows that Strings are to be turned into Objects at runtime via Boxing

# 129. Working with Strings Part 2

### More String functions of note:

- toLowerCase() - makes all chars in the string lowercase.
- toUpperCase() - makes all chars in the string uppercase.
```
console.log(airline.toLowerCase()); // tap air portugal

console.log(airline.toUpperCase()); // TAP AIR PORTUGAL
```
- trim() - trims all all whitespace from the string
- replace() - replaces **only the first occurrence** of the specified string.
- replaceAll() - replaces **all** of the occurences of the specified string.
```
// replacing

const priceGB = "288,97£";

const priceUS = priceGB.replace("£", "$").replace(",", ".");

console.log(priceUS);

  

const announcement =

  "All Passengers come to boarding door 23. Boarding door 23!";


console.log(announcement.replace("door", "gate")); // replaces only first 'door'

console.log(announcement.replaceAll("door", "gate")); // replaces all 'door's
```

- startsWith() - checks if the string starts with the specified string.
- endsWith() - checks if the string ends with the specified string.


# 130. Working with Strings - Part 3

- split() - Splits a string into an array depending on the delimiter defined in the function.
```
console.log("a+very+nice+string".split("+")); // splits the string based on the delimiter defined (+)
```
- padStart() - Pads a string from the start of its index with the specified character until the string reaches the length specified
```
console.log(message.padStart(25, "+")); // +++++++++++Go to gate 23!

```
- repeat() - Repeats the string based on the number of times defined in the parameter.
```

```


# 131. CHALLENGE # 4

# TODO: Fix implementation....

# [18/05/2025] NOTES

- DONE
# 132. String Methods Practice

- Skipped...

