'use strict';
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀

*/

// My Solution:
const calcAverageHumanAge = function (ages) {
  const calculatedAges = ages.map(age => {
    let humanAge = 0;
    if (age <= 2) {
      humanAge = 2 * age;
    } else if (age > 2) {
      humanAge = 16 + age * 4;
    } else {
      humanAge = age;
    }

    if (humanAge < 18) {
      return;
    } else {
      return humanAge;
    }
  });

  const filteredAges = calculatedAges.filter(age => {
    return age >= 18;
  });

  return filteredAges;
};

const dogAges1 = [5, 2, 4, 1, 15, 8, 3];
const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

const calculatedDogAges1 = calcAverageHumanAge(dogAges1);
const calculatedDogAges2 = calcAverageHumanAge(dogAges2);

const averageHumanAges1 = calculatedDogAges1.reduce((acc, curr, i) => {
  if (i == calculatedDogAges1.length - 1) {
    return (acc + curr) / calculatedDogAges1.length;
  }
  return acc + curr;
});

const averageHumanAges2 = calculatedDogAges2.reduce((acc, curr, i) => {
  if (i == calculatedDogAges2.length - 1) {
    return (acc + curr) / calculatedDogAges2.length;
  }
  return acc + curr;
});

console.log(calculatedDogAges1);
console.log(calculatedDogAges2);

console.log(averageHumanAges1);
console.log(averageHumanAges2);

// Jonas' Solution:
