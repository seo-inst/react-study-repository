import "./App.css";
import LoginSystem from "./components/LoginSystem";

function App() {
  return (
    <div className="app">
      <h1>React 조건부 렌더링</h1>
      <p>상황에 따른 다른 화면 보여주기</p>
      <LoginSystem />
    </div>    
  );
}

export default App;
