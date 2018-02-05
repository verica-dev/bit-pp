var x = 27;

if (typeof x === "number") {
    if (x > 9 && x < 100) {
        var numb1 = x % 10;
        var numb2 = (x - numb1) / 10;
        var result = (numb1+""+numb2)
        console.log(result)
    } else {
        console.log("error")
    }
} 