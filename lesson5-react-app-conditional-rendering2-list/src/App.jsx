import "./App.css";
import LoginSystem from "./components/LoginSystem";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">조건부 & 리스트 렌더링</h1>
          <p className="app-subtitle">
            상태에 따른 화면 전환과 배열 데이터 관리
          </p>
        </header>
        <main className="app-main">
          {/* 조건부 렌더링 섹션 */}
          <section className="component-section">
            <h2 className="section-title">조건부 렌더링</h2>
            <p className="section-description">로그인 상태에 따른 화면 전환</p>
            <LoginSystem />
          </section>

          {/* 리스트 렌더링 섹션 */}
          <section className="component-section">
            <h2 className="section-title">리스트 렌더링</h2>
            <p className="section-description">
              배열 데이터를 화면에 표시하고 관리하기
            </p>
            <TodoList />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
