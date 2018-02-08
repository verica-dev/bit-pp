function getty(strB, numOfChar) {
    newArr = [];
    for (var i = 0; i < numOfChar; i++) {
        newArr+= strB[i] ;
    }
    return newArr+"...";
}
console.log(getty("KyotoOsakaEdo", 5));

