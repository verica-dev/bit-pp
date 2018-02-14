var Maja = {
    name: "Maja",
    age: "XXVIII",
    occupation: function (what) {
        var learn = "Learning" + what+ ".";
        return learn;
    },
    hobby: function (when) {
        var draw = "Drawing " + when + ".";
        return draw;
    }
};

console.log(Maja.hobby("always"));
console.log(Maja.age);

