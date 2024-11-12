"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Kerri Reed
   Date:   11/12/24

*/

runClock();
setInterval("runClock()", 1000); //runs clock every second instead of needing to refresh
///function to create ad tun the ountdown clock
function runClock(){
   
   /* Store the current date and time */
   var currentDay = new Date();
   var dateStr = currentDay.toLocaleDateString();
   var timeStr = currentDay.toLocaleTimeString();

   //Display the current date and time
   document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

   //Calculate the days until January 1st
   var newYear = new Date("January 1, 2025");
   var nextYear = currentDay.getFullYear() +1;
   newYear.setFullYear(nextYear);
   var daysLeft = (newYear - currentDay)/(1000*60*60*24);

   //calculate hours,minutes, and seconds left
   var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;
   var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
   var secsLeft = (minsLeft - Math.floor(minsLeft))*60;


   /*Display the time left until New Year's Eve */
   document.getElementById("days").textContent=Math.floor(daysLeft);
   document.getElementById("hrs").textContent=Math.floor(hrsLeft);
   document.getElementById("mins").textContent=Math.floor(minsLeft);
   document.getElementById("secs").textContent=Math.floor(secsLeft);

}