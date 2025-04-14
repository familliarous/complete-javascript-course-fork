'use strict';
// // Hoisting and TDZ in practice

// // hoisting with variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// // hoisting with functions

// console.log(addDecl(2, 3));

// console.log(addArrow(2, 3));

// console.log(addExpr);

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// var firstName = 'Matilda';

const calcAge = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // Uses global lexical scope because arrow function has no this keyword
};
calcAge(1991);

const jonas = {
  fistName: 'Jonas',
  year: 1991,

  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year); // jonas value owns the this keyword

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  }, // <- Arrow function
};

jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge; // Method Borrowing, copying an existing defined method

jonas.calcAge();
