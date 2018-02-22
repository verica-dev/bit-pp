(function () {
    function Person(name, lastname) {
        this.name = name;
        this.lastname = lastname;
        this.getData = function () {
            return name + " " + lastname;
        }
    }
    //var person1 = new Person('Petar', 'Rajic');
    // console.log(person1.getData());

    function Seat(seatNumber, category) {
        this.seatNumber = seatNumber || parseInt((90 * Math.random() + 10).toFixed());
        this.category = category || "e";
        this.getData = function () {
            return this.seatNumber + ", " + this.category.toUpperCase();
        }
    }
    //var seat1 = new Seat();
    // console.log(seat1.getData());

    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;
        this.getData = function () {
            return this.seat + ", " + this.person;
        }
    }
    var passenger1 = new Passenger(person1.getData(), seat1.getData());
    // console.log(passenger1);
    // console.log(passenger1.getData());


    function Flight(relation, date) {
        this.relation = relation;
        this.date = new Date(date);
        this.listOfPassengers = [];
        this.getData = function () {
            return this.relation + " " + this.date;
        }

        this.addPassenger = function (Passenger) {
            return this.listOfPassengers.push(Passenger);
        }
    }
    //var flight1 = new Flight("Belgrade - Paris", "2017-02-23");
    // console.log(flight1.getData());
    //flight1.addPassenger(person1);
    // console.log(flight1.listOfPassengers);

    function Airport(name, listOFlights) {
        this.name = "Nikola Tesla";
        this.listOFlights = listOFlights;
        this.addFlight = function (flight) {
            return this.listOFlights.push(flight);
        }
    }

    function createFlight(relation, date) {
        return new Flight(relation, date);
    };
    var flight1 = createFlight(" Belgrade - New York", "Oct 25 2017");
    var flight2 = createFlight("Barcelona - Belgrade","Nov 11 2017");
    // console.log(flight2);


    function createPassenger(person, seat) {
        return new Passenger(person, seat);
    };
    //var passenger2 = createPassenger("John Snow", "25 E");
    // console.log(passenger2);
    // console.log(passenger2.getData());
    var passenger1 = createPassenger("John Snow","1 b");
    var passenger2 = createPassenger("Cersei Lannister","2 b");
    var passenger3 = createPassenger("Daenerys Targaryen","14");
    var passenger4 = createPassenger("Tyrion Lannister");

    flight1.addPassenger(passenger1);
    flight1.addPassenger(passenger2);
    flight2.addPassenger(passenger4);
    flight2.addPassenger(passenger3);
    
            
    
    









})();