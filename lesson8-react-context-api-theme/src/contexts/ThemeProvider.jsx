import React from "react";
import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
/*
    ThemeContext : 앱 전체 테마 상태를 관리하는 Context 
    light / dark 모드 전환 

    React Context 
    1단계 : createContext() , 방송 채널 개설 
    2단계 : Provider 제공   방송국 구축해, 방송 전송 
    3단계 : 자식 children 컴포넌트 consumer 가 useContext 를 통해 정보를 공유받음 , 방송 시청  
*/
// Provider 컴포넌트 분리 : 실제 테마 컨텍스트에서 공유할(공급할) 정보를 제공하는 역할
const ThemeProvider = ({ children }) => {
  // 테마 상태 관리
  const [theme, setTheme] = useState("light");

  //라이트와 다크를 전환할 수 있는 함수 정의
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  const value = {
    theme, // 현재 테마 상태
    toggleTheme, // 테마 변경 함수
  };
  // Provider 역할 :  value prop 에 전달된 데이터를 하위의 모든 자식 컴포넌트에게 제공
  //                 children 은 Provider jsx 태그에 감싸진 모든 컴포넌트를 의미 
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
