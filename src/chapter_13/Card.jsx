import React from "react";

//하위 컴포넌트 감싸서 카드 형태로 보여주는 컴포넌트!
//children -> containment
//title, background -> specialization

//props에서 title, backgroundColor, 그리고 children을 가져옴

//props.children은 부모 컴포넌트에서 자식 컴포넌트를 포함하는 부분을 의미.
// Card 컴포넌트에서 props.children은 <Card> 태그로 감싸진 내용을 의미.
// title, background는 card 컴포넌트에 전달되는 속성값이고
// props.children은 컴포넌트로 감싸진 자식 컴포넌트, 컨텐츠?
// -> <card> </card> 사이에 위치한 것들! 타이틀, 백그라운드는 card 옆에 바로 쓰는거니
// 예를 들어, ProfileCard 컴포넌트에서 ProfileCard 컴포넌트의 내용이 <Card> 태그로 감싸지므로
// 이 부분이 Card 컴포넌트의 props.children으로 전달
function Card(props){
  const { title, backgroundColor, children } = props;
//children은 card컴포넌트의 자식 컴포넌트, card컴포넌트로 감싸진 내용, props.children 통해 전달된 자식 컴포넌트
  //title이 존재할 경우에만 h1태그로 제목 표시
  return (
      <div
        style = {{
          margin : 8,
          padding : 8,
          borderRadius : 8,
          boxShadow : "0px 0px 4px grey",
          backgroundColor: backgroundColor || "white",
        }}
        >
        {title && <h1> {title} </h1>}
        {children}
      </div>
  );
}
export default Card;