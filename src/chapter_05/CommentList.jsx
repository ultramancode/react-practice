import React from "react";
import Comment from "./Comment";
import comment from "./Comment";

const comments = [
  {
    name : "태웅",
    comment : "리액트 연습중",
  },
  {
    name: "웅",
    comment: "이제는 화면도 혼자 구성 가능"
  },
  {
    name: "아",
    comment:  "나중에 사이드 프로젝트는 혼자 프론트엔드까지 해보자~"
  },
];
function CommentList(props){
  return(
      <div>
        {comments.map((comment) => {
          return (
              <Comment name = {comment.name} comment = {comment.comment} />
          )
        })}
      </div>
  );
}
export default CommentList;