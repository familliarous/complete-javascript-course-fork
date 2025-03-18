'use strict';

let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true;

// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio'

// ==== FUNCTIONS ====

function logger() {
    console.log('My name is Jonas');
}

logger();

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);

// ==== ARROW FUNCTIONS ====

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1991));

const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;

    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement2(1991, 'Jof'));
console.log(yearsUntilRetirement2(1999, 'Jof2'));

// ==== FUNCTIONS CALLING OTHER FUNCTIONS ====

const cutPieces = function (fruit) {
    return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple
    and ${orangePieces} pieces of orange.`;

    return juice;
}

console.log(fruitProcessor(2, 3));

// ==== OBJECT METHODS ====

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function () {
        return 2037 - this.birthYear;
    }
};

console.log(jonas.calcAge(1991));