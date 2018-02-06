/*for (var i = 0; i < 15; i++) {
    if (i % 2 === 0) {
        console.log("Even " + i);
    }
    else if(i % 2 !== 0){
        console.log("Odd " + i);
    }

}*/
/*var t = 0;
for (var i = 0; i < 1000; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        t += i;

    }

}
console.log(t);
*/
/*var numbers = [1, 1.5, 2, 2.5];
var sum = 0;
var prod = 1;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 1 === 0) {
        sum = sum + numbers[i];
        prod = prod * numbers[i];
    }
}

console.log(sum);
console.log(prod);
*/

function sum(a, b) {
    var c = a + b;
    return c;
}
var rezultat = sum(2, 3)
console.log(rezultat);

function checkNum(a) {
    var x = a % 2 === 0;
    return x;
}
var odd = checkNum(6);
console.log(odd);

function broj(b) {
    var h = (b > 99 && b < 1000);
    return h;
}
var cif = broj(874);
console.log(cif);

function sred(a, b, c, d) {
    var z = (a + b + c + d) / 4;
    return z;

}

var unesi = sred(2, 1, 7, 9);
console.log(unesi);