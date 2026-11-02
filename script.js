document.addEventListener("DOMContentLoaded", () => {
   "use strict";

   const getEndHour = (hour) => {
      if (hour > 10 && hour < 15) return 'часов';
      else if (hour % 10 === 1) return 'час';
      else if (hour % 10 >= 2 && hour % 10 <= 4) return 'часа';
      return 'часов';
   };

   const getEndMinutes = (minute) => {
      if (minute > 10 && minute < 15) return 'минут';
      else if (minute % 10 === 1) return 'минута';
      else if (minute % 10 >= 2 && minute % 10 <= 4) return 'минуты';
      return 'минут';
   };

   const getEndSeconds = (second) => {
      if (second > 10 && second < 15) return 'секунд';
      else if (second % 10 === 1) return 'секунда';
      else if (second % 10 >= 2 && second % 10 <= 4) return 'секунды';
      return 'секунд';
   };

   const dateFunction = (now) => {
      const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
      const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
      const year = now.getFullYear();        // 2026
      const month = now.getMonth();          // 0–11 (0 = январь)
      const monthName = months[now.getMonth()];  // 0–11 (0 = январь)
      const day = now.getDate();   // 1–31
      const dayName = days[now.getDay()].charAt(0).toUpperCase() + days[now.getDay()].slice(1);   // 0-6
      const hours = now.getHours();          // 0–23
      const minutes = now.getMinutes();      // 0–59
      const seconds = now.getSeconds();

      return `Сегодня ${dayName}, ${day} ${monthName} ${year} года, ${hours} ${getEndHour(hours)} ${minutes} ${getEndMinutes(minutes)} ${seconds} ${getEndSeconds(seconds)}`;
   };

   const addZero = (num) => {
      if (num < 10) return `0${num}`;
      else return num;
   };

   const shortDateFunc = (now) => {
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const day = now.getDate();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      return `${addZero(day)}.${addZero(month)}.${year} - ${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
   };

   const createDate = () => {
      const now = new Date();
      divElement.innerHTML = dateFunction(now);
      shortDate.innerHTML = shortDateFunc(now);
        
   }; 

   const divElement = document.createElement('div');
   const shortDate = document.createElement('div');
   divElement.className = "new-date";
   shortDate.className = "short-date";
   document.body.prepend(shortDate);
   document.body.prepend(divElement);
   createDate();
   setInterval(createDate, 1000);
});
