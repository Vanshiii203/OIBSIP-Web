function convertTemperature(){
    let val = document.getElementById("input_value");
    let result = document.getElementById("result");
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    val.addEventListener("keyup", convertTemperature);
    input.addEventListener("change", convertTemperature);
    output.addEventListener("change", convertTemperature);

    let inputValue = input.value;
    let outputValue = output.value;
    if(inputValue === "Celsius" && outputValue === "Fahrenheit"){
        result.value = Number((val.value) * 9/5) + 32;
      }else if(inputValue === "Celsius" && outputValue === "Kelvin"){
        result.value = Number(val.value) + 273.15;
      }else if(inputValue === "Celsius" && outputValue === "Celsius"){
        result.value = val.value;
      }
      if(inputValue === "Fahrenheit" && outputValue === "Celsius"){
        result.value = Number((val.value - 32) * 5) / 9;
      }else if(inputValue === "Fahrenheit" && outputValue === "Kelvin"){
        result.value = Number((val.value - 32) * 5/9) + 273.15;
      }else if(inputValue === "Fahrenheit" && outputValue === "Fahrenheit"){
        result.value = val.value;
      }
      if(inputValue === "Kelvin" && outputValue === "Celsius"){
        result.value = Number(val.value) - 273.15;
      }else if(inputValue === "Kelvin" && outputValue === "Fahrenheit"){
        result.value = Number((val.value - 273.15) * 9/5) + 32;
      }else if(inputValue === "Kelvin" && outputValue === "Kelvin"){
        result.value = val.value;
      }


    }

    function reset(){
      convertTemperature();
    }