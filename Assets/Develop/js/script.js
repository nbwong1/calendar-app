// added date at the top of the page

var todayEl = moment();
$("#currentDay").text(todayEl.format("dddd, MMMM Do"));

//console log the date for today
console.log(todayEl);
var saveBtn = $(".saveBtn");

function timeBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));

        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present")
        } else {
            $(this).addClass("past");
        }
    })
};

saveBtn.on("click", function() {
    var time = $(this).siblings(".hour").text;
    var plan = $(this).siblings(".plan").val();

    localStorage.setItem(time, plan);
});