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