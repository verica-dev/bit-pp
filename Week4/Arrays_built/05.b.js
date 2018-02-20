/*Write a function that finds all the elements in a given array that start with the “pro”
substring. The function should be case insensitive.
Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
Output: [’Programming’, ‘product’] */

function startsWith(arr, word) {
    var newA = [];
    // arr[i]=/"pro"/i; Kako da radi sa RegExp??? da bi bilo case-insens???
    arr=["JavaScript", "Programming", "fun", "product"];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].startsWith(word)) {
            newA[i]=arr[i];
        }
    }
    return newA;
}
var output=startsWith();

// var output=startsWith(["JavaScript", "Programming", "fun", "product"],"pro");
console.log(output);
