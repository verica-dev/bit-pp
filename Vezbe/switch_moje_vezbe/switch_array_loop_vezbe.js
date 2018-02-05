var day = 5;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break
    default:
        console.log("Not a weekday");

}


var niz = [-4, -1, 6, -5, -6];
if (niz[1] <= 0) {
    console.log("Element niza " + niz[1] + " manji je od nule.");
}

var i = 0;

if (niz[i] < 0) {
    for (i = 0; niz[i] < 0; i++) {

        console.log(niz[i]);
    }

}
else if (niz[i]>0) {
    console.log("Broj je pozitivan.");

} 