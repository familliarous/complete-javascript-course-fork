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

// EQUALITY OPERATORS

// const numNeighbours = prompt('How many neighbour countries does your country have?');

// if (Number(numNeighbours) == 1) {
//     console.log('Only 1 border!')
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border!')
// } else {
//     console.log('No borders.')
// }

// LOGICAL OPERATORS
population = 20
isIsland = false

if (population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`)
} else {
    console.log(`${country} does not meet your needs :(`)
}

// THE SWITCH STATEMENT

// language = prompt('Enter Language');
// switch (language) {
//     case 'Chinese': case 'Mandarin':
//         console.log('MOST number of native speakers!');
//         break;
//     case 'Spanish':
//         console.log('2nd most number of native speakers!');
//         break;
//     case 'English':
//         console.log('3rd most number of natives!');
//         break;
//     case 'Hindi':
//         console.log('4th');
//         break;
//     case 'Arabic':
//         console.log('5th!');
//         break;
//     default:
//         console.log('Great language too :D');
//         break;
// }

// THE CONDITIONAL (TERNARY) OPERATOR
population = 34
console.log(`${country}'s population is ${population > 33 ? "above average" : "below average"}.`)