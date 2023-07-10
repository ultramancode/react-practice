import React from "react";
import Book from "./Book";
function Library(props) {
  return(
      <div>
        <Book name="스프링" numOfPage = {300}/>
        <Book name="aws" numOfPage = {400}/>
        <Book name="리액트" numOfPage= {500}/>
      </div>
  );
}
export default Library;