import React, {useState} from "react";

function SignUp(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("남자");
  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`이름 : ${name}, 성별: ${gender}`);
    //Event 인터페이스의 preventDefault() 메서드는 어떤 이벤트를 명시적으로 처리하지 않은 경우,
    //해당 이벤트에 대한 사용자 에이전트의 기본 동작을 실행하지 않도록 지정
    //여기선 폼의 기본 제출 동작 중지하고 alert 호출하여 알림 창에 이름 표시하도록 설정
    //즉, 폼이 서버로 제출 되는 것 방지하고, 사용자에게 알림으로 이름 보여줄 수 있음->  폼 기본 동작 막고 내가 원하는 걸로 정의할 때..
    event.preventDefault();
  };

  return (
      <form onSubmit={handleSubmit}>
        <label>
          이름:
          <input type="text" value ={name} onChange = {handleChangeName} />
        </label>
        <br />
        <label>
          성별:
          <select value = {gender} onChange={handleChangeGender}>
            <option value = "남자"> 남자 </option>
            <option value = "여자"> 여자 </option>
          </select>
        </label>
        <button type = "submit"> 제출 </button>
      </form>
  );
}

export default SignUp;