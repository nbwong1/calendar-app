// added date at the top of the page

var todayEl = moment();
$("#currentDay").text(todayEl.format("dddd, MMMM Do"));

//console log the date for today
console.log(todayEl);

var rootEl = $('#root');

var nineAmEl = $('card');
nineAmEl.attr('id', '#nineAmEl');
