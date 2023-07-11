import {useCallback, useState} from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

//메인컨텐츠 컴포넌트를 자식으로 가짐. themecontext.provider로 감싸서
// theme context값을 하위 컴포넌트가 사용 가능하도록 해줌
function DarkOrLight(props) {

  const [theme, setTheme] = useState("light");

  //toggleTheme은 콜백 함수로, theme 상태 값에 따라 theme 값을 변경해주는 역할.
  // useCallback 훅을 사용하여 메모이제이션된 콜백 함수를 생성하고,
  // 의존성 배열로 [theme]을 전달하여 theme 값이 변경될 때만 콜백 함수가 새로 생성되도록 ㅁ.
  const toggleTheme = useCallback(
      () => {
        if (theme == "light") {
          setTheme("dark");
        }else if (theme == "dark"){
          setTheme("light");
        }
      }, [theme]);

  //메인컨텐트 렌더링하니 메인컨텐트는 자식 컴포넌트
  return (
      <ThemeContext.Provider value={{ theme, toggleTheme}}>
        <MainContent/>
      </ThemeContext.Provider>
  );
}
export default DarkOrLight;