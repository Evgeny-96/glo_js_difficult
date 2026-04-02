document.addEventListener('DOMContentLoaded', () => {
   "use strict";

   const lang = prompt("Введите значение переменной: ru / en");

   const weekdayRu = "пн, вт, ср, чт, пт, сб, вс";
   const weekdayEn = "mon, tue, wed, thu, fri, sat, sun";

   /*
   Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. 
   */
   //    a) через if
   if (lang === "ru") console.log("Дни недели на русском языке: ", weekdayRu);
   else if (lang == "en") console.log("Дни недели на английском языке: ", weekdayEn);
   else console.log("Неверно введенный код.");

   //  b) через switch-case

   switch(lang) {
      case "ru":
         console.log("Дни недели на русском языке: ", weekdayRu);
         break;
      case "en":
         console.log("Дни недели на английском языке: ", weekdayEn);
         break;
      default: 
         console.log("Неверно введенный код.");
         break;
   }

   // c) через многомерный массив без ифов и switch.
   const arrWeeday = [
      ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
      ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
   ];

   const arrLang = ["ru", "en"];
   const index = arrLang.indexOf(lang);

   if (index !== -1) console.log("Дни недели: ", arrWeeday[index].join(', '));
   else console.log("Неверно введенный код.");

   // ЗАДАНИЕ 2
   const namePerson = prompt("Введите имя: ");
   namePerson === "Артем" ? console.log("директор") : 
   namePerson === "Александр" ? console.log("преподаватель") : 
   console.log("студент");


});