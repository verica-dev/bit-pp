var niz = [47, 65, 36, 58, 78, 93, 73];
var i = 0;
console.log(niz.length);
var duzina = niz.length;
while (i < duzina) {
    i++;
}
console.log("Niz ima " + i + " elemenata.");/*Ovako gledamo koliko niz ima clanova. */

var index = 3;
var niza = [1, 2, 3, 4, 5];
var clan = niza[index];
console.log(clan); /*Ovako pristupamo clanu niza. */

var mesto = 1;
var zbir = 0;  /*ovako se racuna zbir clanova niza!!! */

for (mesto = 1; mesto < 100; mesto++) {
    zbir += mesto;
}
console.log(zbir);

/*var res = "";
  for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
          res += '*';
      }
      res += '';console.log(res);
  }*/



////*for (var ind = 0; ind<5; ind++)/*ispisujemo red zvezdica*/
//{ resu+="*";   }
//console.log(resu);
/*var dole=0;
var resu="\n";
   for (ind=0; ind<2; ind++)
             {for (var dole=0;dole<1; dole++) { resu+="*"+"\t";}  }
console.log(resu);*/
var resu = "";
var res = '';

for (var i = 0; i < 5; i++) {
    resu += "*";
}
console.log(resu);
for (var j = 0; j < 3; j++) {
    res = '*\t' + "*";/*moze i da bude nov red: */
    console.log(res);
}

console.log(resu);

var r = "";
for (var i = 0; i < 5; i++) {
    r += "*";
} console.log(r);
var f = "";var m=0;
for (var m = 0; m < 3; m++) {
    f += "*";
}console.log(f);
var ly = "";var xy=0;
for (var xy = 0; xy < 7; xy++) {
    ly += "*";
}console.log(ly);
