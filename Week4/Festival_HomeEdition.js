"use strict";

(function () {

    function Genre(name) { //new constructor Genre;
        this.name = name;

        this.getData = function () {
            var firstLetter = this.name[0];
            var lastLetter = this.name[this.name.length - 1];
            var acr = firstLetter + lastLetter; //[VERICA] could be named acronym
            return acr.toUpperCase();
        }
    };
    var genre1 = new Genre("Anime"); //checking the first constr.function; genre1 is instance of Genre;
    console.log(genre1.getData()); //checking the method getData();


    function Movie(title, genre, length) { //new constructor Movie;
        this.title = title;
        this.genre = genre; //this is where we are going to use the instance of Genre-new object, so it'll have all of its methods and properties!!!
        this.length = length;

        this.getData = function () {
            return this.title + ", " + this.length + "min " + this.genre.getData(); // genre is instance of Genre(it's an objects), so we know that it will have method getData!!!
        }
    };

    var movie1 = new Movie("Howl`s moving castle", genre1, 125); //so we are creating new instance 
    //of Movie here; notice that genre parameter here gets object type argument (genre1)!!!!
    console.log(movie1); // so far so good
    console.log(movie1.getData()); // it works!!!

    function Program(date) {
        this.date = function (date) { // using function here, `cause we need our date in certain format.
            var myDate = new Date(date); // Can inner function use params from outter function??? It should be possible.Why Not??
            var currentDay = myDate.getDate();
            var currentMonth = myDate.getMonth();
            currentMonth++; // JS counts months from 0, so January is month no.0, Feb is 1st etc.
            var currentYear = myDate.getFullYear();
            var result = currentDay + "-" + currentMonth + "-" + currentYear;
            return result;
        }

        this.listOfMovies = [] //initially empty, so it's empty string
        this.totalNumOfMovies = this.listOfMovies.length;

        this.addMovie = function (Movie) { //Movie is object, instance of Movie constructor
            this.listOfMovies.push(Movie);
            this.totalNumOfMovies = this.listOfMovies.length;

            // with push we are adding Movie to the movie list
        };

        this.getProgramLength = function(){
            var programLength = 0;
            this.listOfMovies.forEach(function (Movie) {
                programLength += Movie.length;
            });
            return programLength;
        }

        this.getData = function () {
            
            var programLength = this.getProgramLength();
            var printMovies = "";
            this.listOfMovies.forEach(function (Movie) {
                printMovies += "\t" + Movie.getData() + "\n";
            });
            return this.date(date) + ", program duration : " + programLength + "min" + "\n" + printMovies

        };
    }

    var program1 = new Program("2018-05-03"); // OK, just to check constructor Program
    console.log(program1); // works fine, but it's empty
    //I'm making more movies, adding them to movie list...
    var movie2 = new Movie("Sen to Chihiro kamikakushi", genre1, 130); //another anime:)
    console.log(movie2.getData()); //works fine here
    //another movie...
    var movie3 = new Movie("Mononoke Hime", genre1, 120);
    console.log(movie3.getData()); // so I have only one genre, need to make more; good to remember!
    var genre2 = new Genre("Live-Action"); //one more genre to go...
    console.log(genre2.getData());
    //now to add them to our program1, which is empty...
    program1.addMovie(movie1);
    program1.addMovie(movie2);
    program1.addMovie(movie3);
    console.log(program1.listOfMovies); //so all my movies are in the list(here it's an array). Yay!
    console.log(program1.totalNumOfMovies); // so my totalNumOfMovies is being updated!!
    //and now to check final method in Program...
    console.log(program1.getData()); 

    function Festival(name) {
        this.name = name;
        this.programList = []; //this is to use Programs objects in array, to be able to use their properties
        this.addProgram = function (Program) {
            this.programList.push(Program); //updating my array of movies too
        };

        this.totalNumOfMovies = function () {
            var sum = 0;
            this.programList.forEach(function (Program) { //Programs here are instances of Program construct.function,
                //so they have useful property tottalNumOfMovies, which is number
                sum = sum + Program.totalNumOfMovies; //when I sum those numbers...
            });
            return sum; //this is my number of all the movies in festival
        }

        this.getData = function () {
            var programList = "";
            this.programList.forEach(function(Program){
                programList += Program.getData();
            });
            return this.name + " festival will present " + this.totalNumOfMovies() + //this is a method, use() to invoke it!!!
                " movies, divided in programs: " + "\n" + programList;

        }

    }

    var festival1 = new Festival("Japan-Movies");
    // console.log(festival1);
    festival1.addProgram(program1);
    console.log(festival1.programList);
    var program2 = new Program("1989-04-27");
    var movie4 = new Movie("Mugen no Junnin", genre2, 130);
    program2.addMovie(movie4);
    console.log(program2.getData());

    festival1.addProgram(program2);
    console.log(festival1.programList);
    console.log(typeof (festival1.programList));

    console.log(festival1.getData());


    function createMovie(title, genre, length) {
        var myGenre = new Genre(genre);
        return new Movie(title, myGenre, length);
    };

    var movie5 = createMovie("Gintama", "Action", 118, );
    console.log(movie5.getData());

    function createProgram(date) {
        return new Program(date);
    };

    var program3 = createProgram("1992-01-17");
    console.log(program3);
    program3.addMovie(movie5);
    console.log(program3.getData());

    festival1.addProgram(program3);
    console.log(festival1.getData());


























})();