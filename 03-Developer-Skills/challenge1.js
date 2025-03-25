// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temps = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];

const printForecast = arr => {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += arr[i] + 'ºC in ' + i + ' days ... ';
  }
  console.log('... ' + str);
};

printForecast(temps);

printForecast(temps2);
