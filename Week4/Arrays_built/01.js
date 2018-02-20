function duplicateElems (arr) {
    var newArr=[];
    for (var i =0; i<arr.length;i++){
        newArr.push(arr[i]);
        newArr.push(arr[i]);
        
        
    }
    return newArr;
}
var output = duplicateElems([2,4,5,7]);
console.log(output);
