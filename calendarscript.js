let todayDate = moment().format('LLLL');




let hour24 = moment().format('H');

var currentDay = $("#currentDay");

var textArea = $(".description");

var rowDiv = $(".time-block");

var allDayEvents = [];

console.log(hour24);

currentDay.append(todayDate);



function renderSchedulePlans() {

    $(".time-block").each(function()
    {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !== null)
        {
            $(this).children(".description").val(schedule);
        }
    });


}





$(".time-block").each(function() {    

    if (this.id < hour24) {
        $(this).addClass("past");
    } else if (this.id == hour24) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");

    }

})

var saveBtn = $(".saveBtn");

saveBtn.on("click", function()
{
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".description").val();

    localStorage.setItem(time, schedule);
});



renderSchedulePlans();  





