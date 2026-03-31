document.addEventListener('DOMContentLoaded', () => {
   "use strict";

   const num = 266219;
   let result = 1;

   const numStr = num.toString();

   for (let i = 0; i < num.toString().length; i++) {
      result *= numStr[i];
   }

   console.log('result: ', result);
   const step = result ** 3;
   console.log('step: ', step);
   console.log('первые 2 цифры step: ', step.toString().slice(0, 2));
});