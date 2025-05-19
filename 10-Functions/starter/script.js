'use strict';

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
