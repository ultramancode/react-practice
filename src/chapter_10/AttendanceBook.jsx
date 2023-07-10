import React from "react";

const students = [
  {
    //키 없이해도 화면은 동일하게 나오는데 콘솔창에 키 값 넣으라고 경고 메시지 뜸, map 사용 시 키 값 넣기!
    id: 1,
    name: "woong",
  },
  {
    id: 2,
    name: "tae",
  },
  {
    id: 3,
    name: "tw",
  },
];

function AttendanceBook(props) {
  return (
      <ul>
        {students.map(
            (student) => {
              //키를 여기다가 하는군
              return <li key = {student.id}> {student.name}</li>;
            })}
      </ul>
  );
}

export default AttendanceBook;