import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
  if(props.celsius >= 100){
    return <p> 물이 끓습니다. </p>;
  }
  return <p> 물이 끓지 않습니다. </p>;
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

//convert는 밑에서 to~ 어떤거로 할지 결정
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  //입력값 없으면 공백
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  //소수점 셋째자리까지 하려고 1000 곱하고 나누고.. 둘째자리까지 하려면 100곱하고 나누면 되겠지
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function Calculator(props) {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const handleCelsiusChange = (temperature) => {
    setTemperature(temperature);
    setScale("c");
  };

  const handleFahrenheitChange = (temperature) => {
    setTemperature(temperature);
    setScale("f");
  };

  const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
      <div>
        <TemperatureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={handleCelsiusChange}
        />
        <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)}/>
      </div>
  );
}
export default Calculator;
