// VALUES AND VARIABLES

let country = 'Philippines';
let continent = 'Asia';
let population = 114900000;

console.log(country);
console.log(continent);
console.log(population);

// DATA TYPES

let isIsland = true;
var language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof language);
console.log(typeof country);

// LET, CONST, AND VAR

language = 'Filipino';
const CONTINENT = 'Asia';
// CONTINENT = 'Africa';
console.log(CONTINENT);

// BASIC OPERATORS

console.log(population / 2);
console.log(population + 1);
console.log(population > 6000000);
console.log(population < 33000000);

console.log(typeof null);

let description = country + ' is in ' + CONTINENT + ' and its ' + population + ' people speak ' + language;
console.log(description);

// STRINGS AND TEMPLATE LITERALS

const firstName = 'John';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' +
    (year - birthYear) + ' years old ' + job;

console.log(jonas);

const jonasNew = `I'm ${firstName},
a ${year - birthYear}`;

console.log(jonasNew);

let newDescription = `Recreation using string literals: 
${country} is in ${CONTINENT} 
and its ${population} people 
speak ${language}`;
console.log(newDescription);

// TAKING DECISIONS: IF/ELSE STATEMENTS

population = 114;

if (population > 33) {
    let average = (population - 33) / 2;
    console.log(`${country}'s population is ${average} million above average`);

}

// TYPE CONVERSION AND COERCION

console.log('9' - '5') // 4
console.log('19' - '13' + '17') // 617
console.log('19' - '13' + 17) // 23
console.log('123' < 57) // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143
