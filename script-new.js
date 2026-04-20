document.addEventListener('DOMContentLoaded', () => {
   "use strict";

   const getText = function (elem) {
      if (!elem || elem.trim() === "") return console.log("Введена пусая строка");

      if (!isNaN(elem.trim())) {
         console.log("Введена не строка...");
         return;
      }

      const clearElem = elem.trim();

      if (clearElem.length > 30 ) {
         console.log("отформатированная строка: ", clearElem.slice(0,30) + '...');
      }

   };

   const text = prompt("Введите данные...");

   getText(text);

});