function filteR(num1, num2) {
    if (num1 > num2) {
        var result = num1 + " is bigger number.";
    } else if (num1 < num2) {
        result = num2 + " is bigger number.";
    } else {
        result = "They are equal."
    }
    return result;
}

function test(arr, callback) {
    var a = callback(arr[0], arr[1]);
    return a;
};

var output=test([4,7],filteR);
console.log(output);
