document.addEventListener('DOMContentLoaded', () => {
   "use strict";

   let arr = ['12', '21', '135', '542', '421', '256', '421'];

for (let i = 0; i < arr.length; i++) {
  if (String(arr[i])[0] == '2' || String(arr[i])[0] == '4') {
    console.log(arr[i]);
  }
}
console.log('-------------------');

const isCheckNum = function (number) {
  if (number < 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const primeNumb = function (num) {
  for (let i = 2; i <= num; i++) {
    if (isCheckNum(i)) {
      console.log('Делители этого числа: 1 и ' + i);
    }
  }
}

primeNumb(100);

});
