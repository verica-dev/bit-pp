"use strict"

function studentGrades(arrNames, arrGrades) {

    var result = "";

    for (var i = 0; i < arrNames.length; i++) {
        var ocena = "";
        if (arrGrades[i] < 50) {
            ocena = ocena + 5 + " so failed the exam";
        } else if ( arrGrades[i] < 60) {
            ocena = ocena + 6;
        } else if (arrGrades[i] < 70) {
            ocena = ocena + 7;
        } else if (arrGrades[i] < 80) {
            ocena = ocena + 8;
        } else if (arrGrades[i] < 90) {
            ocena = ocena + 9;
        } else if (arrGrades[i] <= 100) {
            ocena = ocena + 10;
        }
        result = result + arrNames[i] + " had " + arrGrades[i] + " points,and acquired " + ocena + ". ";
    }
    return result;
}

var output = studentGrades(["Laki", "Paki", "Mikica"], [85, 80, 49]);

console.log(output);