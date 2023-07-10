import React, {useEffect, useState} from "react";
import useCounter from "./useCounter";

//최대 카운트 갯수
const MAX_CAPACITY = 10;

function Accommodate(props) {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  //의존성 배열이 없는 형태, 컴포넌트가 마운트 된 직후에 호출, 이후 컴포넌트 업데이트 될 때마다 호출
  useEffect(
      () => {
        console.log("===============")
        console.log("useEffect() is called.");
        console.log(`isFulll: ${isFull}`)
      }
  );
//의존성 배열이 있는 형태, 컴포넌트가 마운트 된 직후에 호출, 이후 카운트값이 바뀔 때마다 호출, 용량 가득 찼는지 여부는 isFull이라는 state에 저장
  useEffect(
      () => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
      }, [count]);


  return (
      <div style={{padding: 16}}>
        <p>{`총 ${count}명 수용했습니다.`}</p>
        <button onClick = {increaseCount} disabled = {isFull}>
          입장
        </button>
        <button onClick={decreaseCount} > 퇴장 </button>
        {isFull && <p style={{color:"red"}}> 정원이 가득 찼습니다. </p> }
      </div>
  );
}
export default Accommodate;