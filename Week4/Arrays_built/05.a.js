/*a. Write a function that finds all the elements in a given array less than a given
element.
Input: [2, 3, 8, -2, 11, 4], 6
Output: [2, 3, -2, 4] */

function allSmallerElems(arr, num) {
    var newarr = [];
    var result;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < num) {
            newarr[i] = arr[i];
            result = newarr;
        }
    }
    return result;
}

var output = allSmallerElems([3, 4, 2, 8, 11,1, 44], 6);
console.log(output);