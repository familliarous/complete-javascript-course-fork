'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

console.log([...arr]);

// SPLICE

// console.log(arr.splice(2)); // modifies the original array
arr.splice(-1); // also modifies the original array
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // modifies original array
console.log(arr2);

// CONCAT

const letters = arr.concat(arr2);
console.log(letters);
console.log(...arr, ...arr2); // spread operator

// JOIN

console.log(letters.join(' - '));

// 150. The new at method
console.log('// 150. The new at method');

const arrNew = [23, 11, 64];

console.log(arr[0]);
console.log(arr.at(0)); // the same as indexing [0].

// why use this if it's just similar?
// use cases: getting the last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-2));

// you can use this for strings also:
console.log('jonas'.at(0));

// 151. Looping arrays: forEach

console.log('151. Looping arrays: forEach');

const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements2) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

// console.log('-----FOREACH-----');
// // forEach method requires a callback function to tell it what to do per iteration
// movements.forEach(function (mov, i, arr) {
//   // 1st param: current element, 2nd param: current index, 3rd param: entire array being looped over
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// 0: function(200)
// 1: function(450)
// 2: function(400)

// When to use foreach method and for of:
// CANNOT break outside of a for each loop.
// You need a for-of loop for that.

// 154. Creating DOM Elements

console.log('154. Creating DOM Elements');

const displayMovements = function (movements) {
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}"> ${
          i + 1
        } ${type}</div>
          <div class = "movements__value">${mov}€</div>
        </div>
        `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

// 157. The map method
console.log('157. The map method');

const eurToUsd = 1.1;

// Original version
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});

// Arrow function version
const movementsUSDCallback = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);
console.log(movementsUSDCallback);

// for of loop equivalent
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

// Map passes mov, i to the callback for each index.
const movementsDescriptions = movements.map((mov, i) => {
  return `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${mov}`;
});
console.log(movementsDescriptions);

// 158. Computing Usernames

console.log('158. Computing Usernames');

const createUsernames = function (accts) {
  accts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

console.log(accounts);

// 159. The filter method

console.log('159. The filter method');

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

// same output, but with for of:
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

// MY solution for withdrawals challenge
const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});

console.log(movements);
console.log(withdrawals);

// 160. The reduce method
console.log('160. The reduce method');
console.log(movements);

const balance = movements.reduce((acc, cur) => acc + cur, 0);

console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

calcDisplayBalance(account1.movements);

// Max value of the movements array via Reduce
// initial value must be first value of the array

const maxMovementvalue = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);

console.log(maxMovementvalue);

// 162. The magic of chaining methods

console.log('162. The Magic of Chaining Methods');

const totalDepositsInUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  // .map((mov, i, arr) => {
  //   console.log(arr);
  //   return mov * eurToUsd;
  // })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsInUSD);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc - mov, 0);
  labelSumOut.textContent = `${out}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

calcDisplaySummary(account1);

// 164. The find method

console.log('164. The find method');

const firstWithdrawal = movements.find(mov => mov < 0); // find only returns the element

console.log(movements);
console.log(firstWithdrawal);

// 165. Implementing Login

console.log('165. Implementing Login');

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value,
  );
  console.log(currentAccount);
  if (currentAccount.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Display UI and login
    displayMovements(currentAccount.movements);
    calcDisplayBalance(currentAccount.movements);
    calcDisplaySummary(currentAccount);
  }
});
