"use strict"
var arr = [2, 1, 4, 3];
for (var i = 0; i < arr.length; i++) {
    for (var j = 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            console.log(arr[i] + " nije max.");

        }
    }
}