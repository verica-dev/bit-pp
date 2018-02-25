
function todayDay() {
    var myDay = new Date("2019-04-27");
    var currentDay = myDay.getDate();
    var currentMonth = myDay.getMonth();
    currentMonth ++; // JS counts months from 0, so January is month no.0, Feb is 1st etc.
    var currentYear = myDay.getFullYear();
    var result = currentDay + "-" + currentMonth + "-" + currentYear;
    return result;
};

var output = todayDay();
console.log(output);



 
