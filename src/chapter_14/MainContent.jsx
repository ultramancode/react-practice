import ThemeContext from "./ThemeContext";
import {useContext} from "react";

function MainContent(props) {
  //themecontext로 부터 현재 설정된 테마값 받아와서 실제 화면에 렌더링
  //테마 변경 누르면 toggletheme 함수 호출하여 themecontext 값 변경
  const {theme, toggleTheme} = useContext(ThemeContext);

  return(
      <div
      style={{
        width: "100vw",
        height: "100vh",
        padding: "1.5rem",
        backgroundColor: theme == "light" ? "white" : "black",
        color: theme == "light" ? "black" : "white",
      }}
      >
      <p> 테마 변경 적용!</p>
      <button onClick={toggleTheme}> 테마 변경 </button>
      </div>
  );
}

export default MainContent;