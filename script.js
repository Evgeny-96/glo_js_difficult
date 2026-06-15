document.addEventListener("DOMContentLoaded", () => {
   "use strict";

   const week = ['вс','пн','вт','ср','чт','пт','сб'];

   let divWeek = document.querySelector('.week');
   const today = new Date();

   week.forEach((item, index) => {
   const newP = document.createElement('p');
      if (index === today.getDay()) {
         divWeek.append(newP, week[index].bold());
      } else if (index === 0 || index === 6) {
         divWeek.append(newP, week[index].italics());
      } else {
         divWeek.append(newP, week[index]);
      }
   })
   
});
