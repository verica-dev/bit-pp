"use strict"

function maximArr(a) {
    // var a = [1, 2, 3, 10, 15, -7, undefined, "Maja"];
    var max = a[0];
    var j = 0;

    for (var i = 0; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
            j = i;
        }
    }
    return "Element " + max + " on positin " + j + " is maximum of given array.";
}

var result = maximArr([1, 2, 3, 10, 15, -7, undefined, "Maja"]);
console.log(result);