import React from "react";
import "./styles/App.css";
import ThemeProvider from "./contexts/ThemeProvider";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ThemeButton from "./components/ThemeButton";
/*
  React Context API : React 의 전역 상태 관리를 위한 기술 (hook)
*/
const App = () => {
  return (
    // 리액트 컨텍스트 첫번째 예제에서는 직접 App.jsx 에서 공유 정보를 정의하고
    // Provider를 명시했음 -> 이 경우 컨텍스트를 여러개 사용하거나 공유 정보가 많을 때는
    // 유지보수가 어려움 -> 현 예제에서는 별도의 contexts/ThemeProvider 의 별도 컴포넌트에서 분리하여 정의 -> 응집도 높임 -> 유지 보수성의 향상
    <ThemeProvider>
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar />
          <main className="app-main">
            <h2>Context API로 모든 컴포넌트에서 정보공유</h2>
            {/* ThemeButton을 이용하면 theme를 읽고 버튼을 눌러 테마를 변경할 수 있음 */}
            <ThemeButton />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
