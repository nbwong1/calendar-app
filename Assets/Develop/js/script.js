// added date at the top of the page

var todayEl = moment();
$("#currentDay").text(todayEl.format("dddd, MMMM Do"));

//console log the date for today
console.log(todayEl);

$( ".saveBtn" ).button({
    icon: "ui-icon-lock"
  });