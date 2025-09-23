import React from "react";
import "../styles/Header.css";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
/*
    useContext hook :  theme 공유 정보를 전달받기 위한 hook 
    1. ThemeContext 에서 value 를 가져옴 
    2. 구조 분해 할당으로  theme 정보만 추출 
    3. Context theme 변경되면 자동으로 리렌더링 
*/
const Header = () => {
  // 구조분해할당으로 필요한 테마정보만 추출
  const { theme } = useContext(ThemeContext);

  return (
  <header className={`header ${theme}`}>
    <h2>Header 자식 컴포넌트</h2>
    <p>현재 테마: {theme === 'dark' ? '다크모드' : '라이트모드'}</p>
  </header>
  )
};

export default Header;
