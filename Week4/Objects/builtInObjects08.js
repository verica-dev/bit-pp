// 8. Write a function to capitalize the first letter of a string and returns modified string.

//    "js string exercises" -> "Js string exercises"
"use strict"

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var output = capitalizeFirstLetter("js string exercises");
console.log(output);