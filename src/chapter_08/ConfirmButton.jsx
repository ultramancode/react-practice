import React, {useState} from "react";

function ConfirmButton(props){
  const [isConfirmed, setIsConfirmed] = useState(false);

  //prev.. setstate 메서드 콜백함수에서 이전 상태값 나타내는 변수명으로 사용되는 관례..
  const handleConfirm = () => {
    setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
  };

  return (
      <button onClick = {handleConfirm} disabled={isConfirmed}>
        {isConfirmed ? "확인됨" : "확인하기" }
      </button>
  );
}
export default ConfirmButton;