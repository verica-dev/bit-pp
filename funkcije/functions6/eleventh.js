"use strict"

var arr = [1, 2, 3, 4, 5];
var l = arr.length;
if (l % 2 !== 0) {
    var first = arr[0];
    var second = arr[(l - l % 2) / 2];
    var last = arr[l - 1];
    console.log(first, second, last);

} else if (l % 2 === 0) {
    var evenfirst = arr[0];
    var evenlast = arr[l - 1];
    console.log(evenfirst, evenlast);

} else {
    console.log(arr);

}