'use strict';

// 135. Default Parameters

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers,
) {
  // use short circuiting (ES5):
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');

createBooking('LH123', 2, 800);

createBooking('LH123', 2);

createBooking('LH123', 5);

// can't skip parameters:

createBooking('LH123', 2999);

// put undefined so you can "skip"

createBooking('LH123', undefined, 1000);

// 136. How Passing Arguments Works: Value vs. Reference

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert('Checked in!');
//   } else {
//     alert('Wrong Passport!');
//   }
// };

// checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(jonas);
// checkIn(flight, jonas);

// 138. Functions Accepting Callback Functions

console.log('138. Functions Accepting Callback Functions');

const oneWord = function (str) {
  return str.replace('/ /g', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function: Operates at a higher level of abstraction.
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed By: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('👋');
};

// JS Uses callbacks all the time
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5); // <-- for each element in the array, run the passed function

// 139. Functions Returning Other Functions
console.log('139. Functions Returning Other Functions');

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// Works because of Closures (HIGHLY MISUNDERSTOOD TOPIC)
const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

// My Solution
const greetReWrite = greeting => {
  return name => {
    console.log(`${greeting}, ${name}!`);
  };
};

// Jonas' Solution
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetReWrite('Bonjour')('Gustave');
greetReWrite('Bonjour')('Maelle');

// 140. The call and apply methods
console.log('140. The call and apply methods');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Lune');
lufthansa.book(635, 'Sciel');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// does NOT work
// book(23, 'Monoco');

// Call method
book.call(eurowings, 23, 'Monoco');
console.log(eurowings);

book.call(lufthansa, 239, 'Verso');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Verso');

// Apply method, not much used anymore
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// ...because we can just spread the data
book.call(swiss, ...flightData);

// 141. The Bind method

console.log('141. The Bind Method');

const bookEw = book.bind(eurowings); // bind returns a new function
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEw(23, 'Steven Williams');

// Partial Application
const bookEw23 = book.bind(eurowings, 23); // 2nd param: define arguments for the method you're passing

bookEw23('Monoco');
bookEw23('Sophie');

// With eventListeners:
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial Application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVat = value => value * 0.23

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxFunc = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVatFunc = addTaxFunc(0.23);

console.log(addVatFunc(100));
