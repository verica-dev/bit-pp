function GroceryListItem(item, price) { /*Ovim mojim konstruktorom kreiram nov item za shopping */
    this.item = item;
    this.price = price;
};

var list1 = new GroceryListItem("cat food", 150); /*Ovo su instance grocery lista */
var list2 = new GroceryListItem("milk", 100);

var list3 = new GroceryListItem("chocolate", 70);

var list4 = new GroceryListItem("soap", 50);

// console.log(list);                        /*To vidimo ovde-ove instance */
// var newArr= [list1,list2,list3,list4];
// console.log(newArr);

// var sum=0;                               /*Ovo je kao funkcija koja racuna ukupan racun - sumu kupovine, nad instancama */
// for (var i =0; i<newArr.length;i++){
//      sum=sum+newArr[i].price;
// }; console.log("Total bill is:  "+sum+ " rsd.");


function totalBill(newArr) { /*Moja custom-made funkcija koja sabire elemente niza */
    var sum = 0;
    for (var i = 0; i < newArr.length; i++) {
        sum = sum + newArr[i];
    }
    return sum;
}
// console.log(totalBill([20, 100, 50]));

var lista = [list1.price, list2.price, list3.price, list4.price]; /*Ovo su propertiji iz vise instanci */

function averageGrocery(products, total) { /*Ovo je f-ja sa callback f-jom!!! Kao callback pozvala sam ovu f-ju sto racuna sumu! */
    var average = (total(products)) / products.length;
    return average;
}
var output = averageGrocery(lista, totalBill);
console.log(output);