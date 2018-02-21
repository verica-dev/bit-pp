"use strict";

(function () {
        function Product(name, price, expDate) {
            this.productId = (function () {
                var idNumber = Math.floor(100000 * Math.random()); /*Moze i ovako:Math.floor((89999*Math.random())+10000) */
                return idNumber;
            })();
            this.name = name;
            this.price = (function () {
                return parseFloat(price).toFixed(2);
            })();
            this.expDate = new Date(expDate);
            this.getInfo = function () {
                var firstLetter = name.charAt(0);
                var lastLetter = name.charAt(name.length - 1);
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
                //var mostExpensive = Math.max(this.productList);
                //return mostExpensive + " " + this.product.getInfo;
            };

            this.addProduct = function (product) {
                var today = new Date();
                
                if (product.expDate > today) {
             
                    return this.productList.push(product);
                }
            };

            this.totalPrice = function () {
                //var sum = sumProducts(this.productList);
                // return sum;
            }

        }
            var milk = new Product("milk", 120, "2019-02-25");
            console.log(milk);

            var lista= new ShoppingBag ();
            lista.addProduct(milk);
            console.log(lista.productList);


        })();