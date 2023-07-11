import React from "react";

const scaleNames = {
  c: "섭씨",
  f: "화씨",
};

function TemperatureInput(props) {
  const handleChange = (event) => {
    //값 변경 시, 상위 컴퍼넌트로 변경된 값 전달
    props.onTemperatureChange(event.target.value)
  };

  //렌더링 할 jsx
  return (
      // 폼 요소를 그룹으로 묶음, legend는 그룹으로 묶는 구역에 제목을 붙이는 태그
      //props.temperature 상위 컴포넌트에서 받아옴~
      <fieldset>
        <legend>
          온도를 입력해주세요(단위: {scaleNames[props.scale]}:
        </legend>
        <input value = {props.temperature} onChange = {handleChange} />
      </fieldset>
  );
}
export default TemperatureInput;