"use strict"

// var arr=[3,50,12,1,19];
function switchMaxMin(arr) {
    var max = arr[0];
    var mestoMax = 0;
    var min = arr[0];
    var mestoMin = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            mestoMax = i;
        } else if (arr[i] < min) {
            min = arr[i];
            mestoMin = i;
        }
    }
    var temp = arr[mestoMax];
    arr[mestoMax]= min;
    arr[mestoMin]= temp;

    return arr;
}

console.log(switchMaxMin([3,50,12,1,19]));
