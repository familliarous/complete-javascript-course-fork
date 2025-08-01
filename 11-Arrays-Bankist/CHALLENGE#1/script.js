'use strict';
///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// Jonas' Solution:

const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsKate1 = [4, 1, 15, 8, 3];

const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is ${dog} years old`);
    } else console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  });
};

checkDogs(dogsJulia2, dogsKate2);

// My Solution:
// const dogsJulia1 = [3, 5, 2, 12, 7];
// const dogsKate1 = [4, 1, 15, 8, 3];
// const dogsJulia1Copy = Array.from(dogsJulia1);
// const dogsJulia2 = [9, 16, 6, 8, 3];
// const dogsKate2 = [10, 5, 6, 1, 4];
// const dogsJulia2Copy = Array.from(dogsJulia2);
// dogsJulia1Copy.splice(3, 2);
// dogsJulia2Copy.splice(3, 2);
// const dogsJulia1Kate1 = [...dogsJulia1Copy, ...dogsKate1];
// const dogsJulia2Kate2 = [...dogsJulia2Copy, ...dogsKate2];

// const checkDogs = function (dogsJulia, dogsKate) {
//   for (let i = 0; i < dogsJulia.length; i++) {
//     if (dogsJulia[i] >= 3) {
//       console.log(
//         `Dog number ${i + 1} is an Adult, and is ${dogsJulia[i]} years old`,
//       );
//     } else if (dogsJulia[i] < 3) {
//       console.log(`Dog number ${i + 1} is still just a Puppy 🐶`);
//     }
//   }

//   for (let i = 0; i < dogsKate.length; i++) {
//     if (dogsKate[i] >= 3) {
//       console.log(
//         `Dog number ${i + 1} is an Adult, and is ${dogsKate[i]} years old`,
//       );
//     } else if (dogsKate[i] < 3) {
//       console.log(`Dog number ${i + 1} is still just a Puppy 🐶`);
//     }
//   }
// };

// checkDogs(dogsJulia1Copy, dogsKate1);
// checkDogs(dogsJulia2Copy, dogsKate2);
