'use strict';
// Hoisting and TDZ in practice

// hoisting with variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// hoisting with functions

console.log(addDecl(2, 3));

console.log(addArrow(2, 3));

console.log(addExpr);

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
