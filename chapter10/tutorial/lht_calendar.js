"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Tutorial Case

   Author: Kerri Reed
   Date:  11/19/24

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/

//Set the date displayed in teh calendar
var thisDay = new Date();

//Write the calendar to the element with the id "calendar"
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

//function to generate calendar table
function createCalendar(calDate){
   var calendarHTML = "<table id='calendar_table'>";
   calendarHTML += calCaption(calDate);
   calendarHTML += calWeekdayRow();
   calendarHTML += calDays(calDate);
   calendarHTML += "</table>";
   return calendarHTML;
}
//fucntion tow rite the calendar caption

function calCaption(calDate){
   //monthNsme array contains teh list of month names
   var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      //Determine the current month
      var thisMonth = calDate.getMonth();

      //Determine the curretn year
      var thisYear = calDate.getFullYear();

      //Write the caption
      return "<caption>" + monthName[thisMonth] + " " + thisYear + "<caption>";
}

//write a table row of weekday abbrevations
function calWeekdayRow(){
   //Array of weekday abbreviations
   var dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
   var rowHTML = "<tr>";

   //Look through the dayName array
   for (var i=0; i<dayName.length; i++){
      rowHTML += "<th class='calendar_weekdays'>" + dayName[i] + "</th>";
   }

   //rowHTML += "</tr";
   return rowHTML;
}

//fucntion to claculate number of days in month

function daysInMonth(calDate){
   //Array of days in each month

   var dayCount = [31,28,31,30,31,30,31,31,30,31,30,31];

   //extract the 4 digit year and month value
   var thisYear = calDate.getFullYear();
   var thisMonth = calDate.getMonth();

   //check for leap year 
   if (thisYear %4 === 0){
      if((thisYear % 100 !=0) || (thisYear % 400 === 0)){
      dayCount[1] = 29;
     }
   }
   //return the number of days for the current month
   return dayCount[thisMonth];
}

//Fucntion to write table rows for each day of the month

function calDays(calDate){
   //determine starting day of monht
   var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
   var weekDay = day.getDay(); //day of week
   //write black cells preceding starting day
  var htmlCode = "<tr>";
  for (var i=0; i<weekDay; i++){
      htmlCode += "<td></td>";
   }
      
   //write cells for each day of the month
    var totalDays = daysInMonth(calDate);
    
    var highlightDay = calDate.getDate();
    for (var i = 1; i<= totalDays; i++){
      day.setDate(i);
      weekDay = day.getDay();

      if(weekDay === 0) htmlCode += "<tr>";
      if(i === highlightDay){
         htmlCode += "<td class='calendar_dates' id='calendar_today'>" + i + dayEvent[i] + "</td>";
      }
      else{
         htmlCode += "<td class='calendar_dates'>" + i + dayEvent[i] + "</td>";
      }
      if(weekDay === 6) htmlCode += "</tr>";
    }
    return htmlCode;
}