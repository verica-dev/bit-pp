"use strict"

function arrElemsDivByTwoPlusfive(arr) {
    var newArr=[];
    for ( var i =0; i< arr.length; i++){
        if (arr[i]===0){
            arr[i]=20;
        }
        arr[i]=arr[i]/2+5;
        newArr[i] = arr[i];
    }
    return newArr;
}
console.log(arrElemsDivByTwoPlusfive([3,50,12,1,19]));
