import React from "react";
import "../styles/ThemeButton.css";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

/*
    테마버튼을 클릭 -> Provider의 toggleTheme 함수 실행 -> useState hook 함수가 실행되어 state 가 변경 -> ThemeContext를 구독하는 모든 자식 컴포넌트 자동 리렌더링
    즉 Header Siderbar ThemeButton component 들이 모두 새로운 theme로 업데이트  
*/
const ThemeButton = () => {
    //구조분해할당으로 theme 정보와 toggleTheme 함수를 받아온다 
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="theme-button-container">
      <button className={`theme-button ${theme}`} onClick={toggleTheme}>
        {theme === 'dark' ? '라이트모드로' : '다크모드로'}
      </button>
      <p className="theme-description">
        이 버튼을 누르면 Header와 Sidebar가 동시에 변경됩니다!
      </p>
    </div>
  );
};

export default ThemeButton;
