import React from "react";
import Card from "./Card";

// ProfileCard 컴포넌트는 Card 컴포넌트를 사용하여 사용자 프로필을 나타내는 프로필 카드 컴포넌트
// Card 컴포넌트에 title과 backgroundColor 속성을 전달하여 프로필 카드의 제목과 배경색을 설정.
// JSX로 구현된 컴포넌트는 <Card> 요소로 감싸져 있으며, <p> 태그로 간단한 소개글을 표시.
// 카드 컴포넌트를 사용하여 타이틀에 이름 넣고 백그라운드를 녹색으로하고 칠드런으로 간단한 소개글 넣어봄
// 이렇게 하면 카드 컴포넌트가 사용자 프로필 나타내는 프로필 카드 컴포넌트가 된다.

function ProfileCard(props){
  return (
      <Card title = "taewoong Kim" backgroundColor = "#4ea04e">
        <p>리액트 리액트 리액트</p>
        <p>리액트 연습 중임!</p>
      </Card>

  );
}
function ProfileCard2(props){
  return (
      <Card title = "taewoong Kim" backgroundColor = "#4ea04e">
        <p>리액트 222</p>
        <p>리액트 연습 중임!222</p>
      </Card>

  );
}

function App() {
  return (
      <div>
        <ProfileCard />
        <ProfileCard2 />
      </div>
  );
}

export default App;