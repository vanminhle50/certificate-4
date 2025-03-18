function celsiusToFahrenheitClick(){
    var c = document.getElementById("input-celsius").value;
    var f = celsiusToFahrenheit(c);
    document.getElementById("output-celsius").innerHTML = f;
}

function fahrenheitToCelsiusClick(){
    var f = document.getElementById("input-fahrenheit").value;
    var c = fahrenheitToCelsius(f);
    document.getElementById("output-fahrenheit").innerHTML = c;
}

function celsiusToFahrenheit(c) {
    var f = c * 9/5 + 32;
    return f;
}

function fahrenheitToCelsius(f) {
    var c = (f - 32) * 5/9;
    return c;
}