function middleNumOfElems(arr) {
    var firstHalf = 0;
    if (arr.length % 2 !== 0) {
        firstHalf=arr.length - ((arr.length-1)/2);
    } else {
        firstHalf= "Error, array length is even number!"
    }
    return firstHalf;
}

var output = middleNumOfElems([1,2,3,4,5,6,7]);
console.log(output);
