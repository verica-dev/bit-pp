"use strict";

(function () {
    function Product(name, price, expDate) {
        this.productId = (function () {
            var idNumber = Math.floor(100000 * Math.random()); /*Moze i ovako:Math.floor((89999*Math.random())+10000) */
            return idNumber;
        })();
        this.name = name;
        this.price = (function () {
            return parseFloat(price.toFixed(2));
        })();
        this.expDate = new Date(expDate);
        this.getInfo = function () {
            var firstLetter = this.name.charAt(0);
            var lastLetter = this.name.charAt(name.length - 1);
            var final = firstLetter + lastLetter;
            return final.toUpperCase() + this.productId + ", " + this.name + ", " + this.price;
        }
    }




    function ShoppingBag() {
        this.productList = [];
        this.getAverage = function () {
            var sum = 0;
            for (var i = 0; i < this.productList.length; i++) {
                sum = sum + this.productList[i].price;
            }
            var average = sum / this.productList.length;
            return parseFloat(average).toFixed(2);
        };

        this.getMostExpensive = function () {


            var output = this.productList.slice();

            output.sort(function (prod1, prod2) {
                return prod2.price - prod1.price;
            })

            var mostExpensiveItem = output[0];
            return mostExpensiveItem.getInfo();
        }


        this.addProduct = function (product) {
            var today = new Date();

            if (product.expDate > today) {

                return this.productList.push(product);
            }
        };

        this.totalPrice = function () {
            var totalprice = 0;
            for (var i = 0; i < this.productList.length; i++) {
                totalprice += this.productList[i].price;
            }
            return parseFloat(totalprice);
        }

    }

    function PaymentCard() {
        this.accountBalance = Math.round(899 * Math.random() + 100);
    }

    function checkOutAndBuy(shopBag, payCard) {
        var missing = 0;
        if (payCard.accountBalance >= shopBag.totalPrice()) {
            return "The purchase is successful!!";

        } else {
            missing = shopBag.totalPrice - payCard.accountBalance;

            return "You need " + missing + " dinars more on your account :-((((";
        }

    }


    var apple = new Product("apple", 50, "2018-05-15");
    var milk = new Product("milk", 120, "2019-02-25");
    console.log(milk);


    var card1 = new PaymentCard();
    console.log(card1.accountBalance);

    var lista = new ShoppingBag();
    lista.addProduct(milk);
    lista.addProduct(apple);
    console.log(lista.productList);
    console.log(milk.getInfo());
    console.log(lista.getMostExpensive());
    console.log(lista.totalPrice());

    console.log(checkOutAndBuy(lista, card1));


})();