document.addEventListener("DOMContentLoaded", () => {
   "use strict";

   const isNumber = function (numb) {
      return !isNaN(parseFloat(numb)) && isFinite(numb);
   }

   const gameBot = function () {
      const rundomNumber = Math.floor(Math.random() * 100) + 1;
      let attempt = 10;

      function numRecursion () {
         if (attempt < 1) {
            if (confirm('Попытки закончились, хотите сыграть еще?')) {
               return gameBot()();
            } else {
               return;
            }
         } else {
            attempt--;
         }
         let numUser = prompt('Угадай число от 1 до 100');

         if (numUser === null) {
         alert('Игра окончена');
         return;
         }

         if (!isNumber(numUser)) {
            alert('Введи число!');
            return numRecursion();
         }
         
         numUser = +numUser;
         
         if (numUser > rundomNumber) {
            alert('Загаданное число меньше, осталлось попыток: ' + attempt);
            return numRecursion();
         } else if (numUser < rundomNumber) {
            alert('Загаданное число больше, осталлось попыток: ' + attempt);
            return numRecursion();
         } else if (numUser === rundomNumber) {
            if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
               return gameBot()();
            } else {
               return;
            }
         }

      }

      return numRecursion;
   }

   const gamebotHero = gameBot();
   gamebotHero();
 
});
