/*Kako visecifrenom broju zameniti cifre? Uz pomoc operatora modulo %*/
var x = 135;
var x_cif1 = x % 10;
console.log(x_cif1); /*moze i x=x%10* i pokaze da je ostatak od deobe x sa 10 =5, a to je poslednja cifra*/
x = x - (x % 10);/* sada je x 135 minus 5 (ostatak od 135/10)*/
console.log(x); /*x je 130 */
x = x / 10; /*130 se sada deli sa 10 i to je x*/
console.log(x);/*sada je x 13*/
if (x >= 10) {/*ako je x vece ili jednako 10, a sada je 13, onda definisemo novu promenljivu gde trazimo ostatk od deljenja sa x*/
    var x_cif2 = x % 10; /*druga cifra je sada 3 (ostatak od 13/10 je 3) */
    console.log(x_cif2);
    var x_cif3 = (x - x_cif2) / 10; /*sada od x (sada je 13) oduzimamo drugu cifru (ostatak od x kada je podeljen sa 10) */
} if (x_cif3 >= 10) {
    console.log(x_cif3 % 10);/*ako ima jos cifara, samo ponoviti postupak za ostale */
} else {
    console.log(x_cif1+""+x_cif2+""+x_cif3);
}




