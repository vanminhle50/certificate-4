function transfer() {
    const selectCelsius = document.getElementById("selectCelsius").value;
    const selectFahrenheit = document.getElementById("selectFahrenheit");

    if (selectCelsius == "celsius") {
        selectFahrenheit.value = "fahrenheit"; 
    } else {
        selectFahrenheit.value = "celsius"; 
    }
}

function convertTemperature() {
    const inputCelsius = document.getElementById("inputCelsius");
    const inputResult = document.getElementById("inputResult");

    const selectCelsius = document.getElementById("selectCelsius").value;

    if (selectCelsius == "celsius") {
        // Convert Celsius to Fahrenheit
        const celsiusValue = parseFloat(inputCelsius.value);
        if (!isNaN(celsiusValue)) {
            const fahrenheitValue = (celsiusValue * 9/5) + 32;
            inputResult.value = fahrenheitValue.toFixed(2);
        } else {
            alert("Please enter a valid Celsius temperature");
        }
    } else if (selectCelsius === "fahrenheit") {
        // Convert Fahrenheit to Celsius
        const fahrenheitValue = parseFloat(inputCelsius.value);
        if (!isNaN(fahrenheitValue)) {
            const celsiusValue = (fahrenheitValue - 32) * 5/9;
            inputResult.value = celsiusValue.toFixed(2);
        } else {
            alert("Please enter a valid Fahrenheit temperature");
        }
    }
}