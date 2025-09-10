import "./App.css";
import Greeting from "./components/Greeting";
import Profile from "./components/Profile";
// React의 App 컴포넌트
function App() {
  //javascript code 영역

  // 아래 리턴 부분은 JSX ( 리액트 컴포넌트로 화면이 그려질 내용 정의)
  // style={{}} // 첫번째 괄호는 jsx 문법 "지금부터 html이 아니야"
  // 두번째 괄호 {} 는 일반 javascript 문법 - JSON 표현할때 중괄호
  // 리액트 함수 컴포넌트 리턴 값은 하나로 반환되어야 하므로
  // <> </> fragment 프래그먼트로 묶어서 주로 반환
  return (
    <>
      <h1 style={{ color: "lime" }}>Hello React</h1>
      <hr className="test"></hr>
      <Greeting />
      <hr className="test"></hr>
      <Profile />
      <hr className="test"></hr>
      {/* Greeting 컴포넌트 재사용 */}
      <Greeting />
      <hr className="test"></hr>
      {/* Profile 컴포넌트 재사용 */}
      <Profile />
    </>
  );
}

export default App; // 외부에 import 해서 사용할 함
