// 7. Write a function that can pad (left, right) a string to get to a determined length.

//    '0000', 123, 'l' -> 0123 
//    '00000000', 123, '' -> 12300000
"use strict"

function padStrng() {
    var n = 123

    String("00000" + n).slice(-5);
    ("00000" + n).slice(-5);
    ("     " + n).slice(-5);
}
console.log(padStrng(123, "0", "1"));