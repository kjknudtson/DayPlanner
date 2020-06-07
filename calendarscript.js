let todayDate = moment().format('LLLL');


let hour24 = moment().format('H');

let hour12 = moment().format('h');

var currentDay = $("#currentDay");

var textArea = $(".col-md-8");

console.log(hour24);

currentDay.append(todayDate);

var nineHour = $("hour-9");

var tenHour = $("hour-10");

var elevenHour = $("hour-11");

var noonHour = $("hour-12");

var oneHour = $("hour-13");

var twoHour = $("hour-14");

var threeHour = $("hour-15");

var fourHour = $("hour-16");

var fiveHour = $("hour-17");

var hoursArray = [nineHour, tenHour, elevenHour, noonHour, oneHour, twoHour, threeHour, fourHour, fiveHour];

for (var i = 0; i < hoursArray.length; i++){

    for (var a = 9; a < 18; a++) {
        hoursArray[i].textarea.setAttribute("id", "a");

        console(log).hoursArray[i].textarea.id;
    }


}


if (textArea.id > hour12.value) {
    textArea.attr("class", "future");
} else if (textArea.id === hour24.value) {
    textArea.attr("class", "present");
} else {
    textArea.attr("class", "past");
}



