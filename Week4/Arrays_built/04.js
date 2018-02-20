function findSmallest(arr) {
    var small = Math.min(...arr);
    var place = arr.lastIndexOf(small);
    var result = {
        smallest: small,
        at: place,
    };


    return result;
}

var output = findSmallest([2,3,1,6,3]);
console.log(output);
