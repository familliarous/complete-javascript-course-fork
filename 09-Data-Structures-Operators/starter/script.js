'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Basically just pass the parameters in reverse by calling this function:
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1} ${ing2} ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Object destructuring
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// Object destructuring with default values
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

// const arr = [2, 3, 4];

// const [x, y, z] = arr; // <-- Destructuring  Assignment

// console.log(x, y, z);

// const [first, second] = restaurant.categories;
// console.log(first, second);

// const [first1, , second1] = restaurant.categories; // <-- if you want to grab or skip an element, literally just skip the element
// console.log(first1, second1);

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main, '<-- Order function');

// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// const [l, , [m, n]] = nested;
// console.log(l, m, n);

// const [p = 3, q = 2, r = 1] = [8, 9];
// console.log(p, q, r);

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// let a = 111;
// let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj); // This expression needs to be in a parenthesis due to it starting with curly brace, which JS expects a function block from
// console.log(a, b);

// nested objects

const {
  fri: { open: o, close: c },
} = openingHours; // Destructured openingHours object into opening and closing hours variables for friday

console.log(o, c);

console.log(
  '========================= SPREAD OPERATOR ========================='
);

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// use the spread operator to spread the contents of the arr array out
const newArr = [1, 2, ...arr];
console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];

const mainMenuCopy = { ...restaurant.mainMenu };

const newMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(newMenu);

const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);
console.log('j', 'o');
// console.log(`${...str} Schmedtmann`); <-- Does not work, spread only used when expecting to pass multiple values separated by comma.

const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Let's make pasta! Ingredient 2?"),
  // prompt("Let's make pasta! Ingredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

console.log('=========== REST PATTERN ===========');

const arrRest = [1, 2, ...[3, 4]];
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects and rest pattern
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 1. Objects

// 2. Functions

const add = function (...numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log(sum);
};
add(1, 2, 3, 4, 5, 6, 7, 4, 3, 234);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

restaurant.orderPizza('mushrooms');

console.log('======== SHORT CIRCUITING =============');

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(undefined || null);
console.log(true || 0);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');

// Falsy value - short circuits to 0
console.log(0 && 'Jonas');
// Truthy value - does not short circuit, shows Jonas
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// If the orderPizza function exists in restaurant, it will not short circuit.
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

console.log('=========== Nullish Coalescing Operator ========');

restaurant.numGuests = 0;
const guests = restaurant.numGuests ? restaurant.numGuests : 10;

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

console.log('=========== Logical Assignment Operators ==============');

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR Assignment operator
// rest1.numberGuests = rest1.numGuests || 10;
// rest2.numberGuests = rest1.numGuests || 10;

// rest1.numGuests ||= 10; // If assigned 0, since this is falsy instead of nullish the operator will still run
// rest2.numGuests ||= 10;

// nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= 'ANONYMOUS'; // Assign a value to var if currently truthy. Otherwise it stays the same
rest2.owner &&= 'ANONYMOUS';

console.log(rest1);
console.log(rest2);

const forLoopMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of forLoopMenu) console.log(item);

// Using destructuring in for of loop
for (const [i, el] of forLoopMenu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log(...forLoopMenu.entries());
