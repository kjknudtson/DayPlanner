let todayDate = moment().format('LLLL');




let hour24 = moment().format('H');

var currentDay = $("#currentDay");

var textArea = $(".description");

var rowDiv = $(".time-block");

var allDayEvents = [];

console.log(hour24);

currentDay.append(todayDate);



function renderSchedulePlans() {

    var allDayEvents = JSON.parse(localStorage.getItem("plannedEvents")) || [];
    
        $(".description").each(function() {
        for (var i = 0; i < allDayEvents.length; i++) {
            textArea.text = allDayEvents[i];
      
            


        }
        })


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

$( ".saveBtn" ).click(function() {
    event.preventDefault();
    $(".description").each(function() {
        
        var scheduleItem = textArea.text;
        
        if (scheduleItem === "") {
            allDayEvents.push("");

        } else {
            allDayEvents.push(scheduleItem);
        }
    })
    
    localStorage.setItem("plannedEvents", JSON.stringify(allDayEvents));
    console.log(localStorage);
  });



renderSchedulePlans();  





