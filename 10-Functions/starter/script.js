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
