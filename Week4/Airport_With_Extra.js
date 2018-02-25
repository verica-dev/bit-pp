"use strict";
(function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function () {
            return this.name + " " + this.surname;
        }
    };
    var person1 = new Person("Musashi", "Miyamoto");
    console.log(person1);
    console.log(person1.getData());
    var person2 = new Person("Kojiro", "Sasaki");
    console.log(person2.getData());

    var person3 = new Person("Seijuro", "Yoshioka");
    console.log(person3.getData());


    ////////////////////////////////////////////////////////////////////

    function Seat(seatNumber, category) {
        this.seatNumber = seatNumber || parseFloat((((100 - 10) * Math.random()) + 10).toFixed()); //need this to return 2-digit number
        this.category = function () {
            var result = (category === "b") ? "b" : "e"; //using ternary operator 
            return result.toUpperCase();
        };
        this.getData = function () {
            return this.seatNumber + ", " + this.category().toUpperCase();
        }
    };
    var seat1 = new Seat(27);
    console.log(seat1.getData());
    var seat2 = new Seat("", "b");
    console.log(seat2.getData());
    var seat3 = new Seat("", "b");
    console.log(seat3.getData());


    ////////////////////////////////////////////////////////////////////////

    function Passenger(Person, Seat) {
        this.passenger = Person;
        this.seat = Seat;
        this.getData = function () {
            return this.seat.getData() + " " + this.passenger.getData();
        }
    };
    var passenger1 = new Passenger(person1, seat1);
    console.log(passenger1.getData());
    var passenger2 = new Passenger(person2, seat2);
    console.log(passenger2.getData());
    var passenger3 = new Passenger(person3, seat3);
    console.log(passenger3.getData());



    ////////////////////////////////////////////////////////////////////////

    function Flight(relation, date) {
        this.relation = function (relation) {
            var relationString = relation;
            relationString.slice();
            // console.log(relationString);
            // console.log(typeof relationString);
            var relationArray = relationString.split("-");
            // console.log(relationArray);
            var element1 = relationArray[0];
            // console.log(element1);
            var element2 = relationArray[relationArray.length - 1];
            // console.log(element2);
            var result = "";
            result = element1[0] + element1[element1.length - 1] + "-" + element2[0] + element2[element2.length - 1];
            return result.toUpperCase();
        };;
        this.date = function (date) { // using function here, `cause we need our date in certain format.
            var myDate = new Date(date); // Can inner function use params from outter function??? It should be possible.Why Not??
            var currentDay = myDate.getDate();
            var currentMonth = myDate.getMonth();
            currentMonth++; // JS counts months from 0, so January is month no.0, Feb is 1st etc.
            var currentYear = myDate.getFullYear();
            var result = currentDay + "-" + currentMonth + "-" + currentYear;
            return result;
        };

        this.listOfPassengers = [];
        this.numOfPassengers = function () { //this function returns a number
            return this.listOfPassengers.length;
        };
        this.addPassenger = function (Passenger) {
            var passengerData = Passenger.getData(); //this is string;
            var seatdata = passengerData.slice(0, 1); //first two characters are numbers;
            // var numOfSeat = parseFloat(seatdata); //this should be a number;
            var maxNumOfPassengers = this.numOfPassengers(); //result of this function is a number
            var passengersOnFlight = this.listOfPassengers.join();//to see all the passenger data as one string
            if (maxNumOfPassengers >= 100) {
                return "We apologize,this flight is full."
            } else if (passengersOnFlight.indexOf(seatdata) === (-1)) {//to see if seat number already exists
                this.listOfPassengers.push(Passenger);
            };
        };


        this.getData = function () {
            var dataAboutPassengers = "\n\t\t";
            this.listOfPassengers.forEach(function (Passenger) {
                dataAboutPassengers += Passenger.getData() + "; " + "\n" + "\t\t";
            });

            return this.date(date) + ", " + this.relation(relation) +
                "\t" + dataAboutPassengers;
        };
    };

    var flight1 = new Flight("Kyoto-Edo", "1615-04-29");
    console.log(flight1.getData());

    flight1.addPassenger(passenger1);
    flight1.addPassenger(passenger2);
    console.log(flight1.numOfPassengers());
    console.log(flight1.listOfPassengers);


    var flight2 = new Flight("Edo-Osaka", "1616-03-02");
    console.log(flight2.getData());

    flight2.addPassenger(passenger3);
    console.log(flight2.numOfPassengers());




    //////////////////////////////////////////////////////////////////////////

    function Airport() {
        this.name = "Haneda Airport";
        this.listOfFlights = [];
        this.addFlight = function (Flight) {
            this.listOfFlights.push(Flight);
        };

        this.getTotalNumOfPassengers = function () {
            var sum = 0;
            this.listOfFlights.forEach(function (Flight) {
                sum = sum + Flight.numOfPassengers();
            });
            return sum;
        }

        this.getData = function () {
            var flightList = "";
            this.listOfFlights.forEach(function (Flight) {
                flightList = flightList + "\n" + "\t" + Flight.getData();
            });
            return this.name + " total passengers : " + this.getTotalNumOfPassengers() + "\t" + flightList;
        }

    };

    var airport1 = new Airport();
    airport1.addFlight(flight1);
    airport1.addFlight(flight2);
    console.log(airport1.getData());

    //////////////////////////////////////////////////////////////

    function createPassenger(name, surname, seat, category) {
        var mySeat = new Seat(seat, category);
        var myFullName = new Person(name, surname);
        return new Passenger(myFullName, mySeat);
    };

    var passenger4 = createPassenger("Samon", "Yagyu");
    console.log(passenger4.getData());

    /////////////////////////////////////////////////////////////


    function createFlight(relation, date) {
        return new Flight(relation, date);
    };

    var flight3 = createFlight("Nara-Kyoto", "1616-01-01");
    console.log(flight3.getData());

    flight3.addPassenger(passenger4);
    airport1.addFlight(flight3);

    console.log(airport1.getData());







})();