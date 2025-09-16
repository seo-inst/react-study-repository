import { useState } from "react";
import "./LoginSystem.css";

/*
조건부 렌더링 핵심:

1. 삼항 연산자: {조건 ? <A/> : <B/>}
   - 조건이 true면 A, false면 B를 렌더링

2. && 연산자: {조건 && <컴포넌트/>}
   - 조건이 true일 때만 컴포넌트 렌더링

3. if/else문으로도 가능하지만 JSX 안에서는 삼항연산자가 일반적

 아래 LoginSystem.jsx 에서 구현할 사항 
- isLoggedIn 상태에 따라 완전히 다른 화면 표시
- 같은 기능을 다른 방법(삼항연산자, &&)으로 구현
- 사용자 상호작용에 따른 화면 전환
*/
function LoginSystem() {
  //javascript 주요 로직
  // 로그인 상태 관리 : React Hook ( 상태관리, 라이프 사이클 등의 기능을 제공 )
  // isLoggedIn : 상태 저장 변수 ,  setIsLoggedIn : 상태 변경을 위해 호출할 함수
  const [isLoggedIn, setIsLoggedIn] = useState(false); // false 초기값
  // 회원 이름 관리하는 state hook
  // username : 상태 저장(회원명) 변수 , setUsername : 상태 변경을 위해 호출될 함수
  const [username, setUsername] = useState(""); // '' : 초기값

  //로그인 처리 함수
  const handleLogin = () => {
    const name = prompt("회원 이름을 입력하세요");
    if (name) {
      setUsername(name); // React state hook 을 이용해 username을 할당하여 리렌더링되어 보여짐
      setIsLoggedIn(true); // React state hook 을 이용해 loggedIn 할당하여 리렌더링되어 보여짐
    }
  };
  //로그아웃 처리 함수
  const handleLogout = () => {
    setUsername(""); // state hook 함수 이용해 정보 변경
    setIsLoggedIn(false); // state hook 함수 이용 정보 변경
  };

  //jsx 화면 렌더링 정보 리턴
  return (
    <div className="login-system">
      <h2>로그인 시스템</h2>
      {/* 삼항 연산자 : isLoggedIn state 값에 따라  true이면 로그인 화면 렌더링과  false 이면 비로그인 화면 렌더링을 구분해 보여준다   */}
      {isLoggedIn ? (
        <div className="logged-in">
          <h3>환영합니다! {username}님</h3>
          <p>로그인이 완료되었습니다.</p>
          <button className="logout-btn" onClick={handleLogout}>
            로그아웃
          </button>
        </div>
      ) : (
        <div className="logged-out">
          <h3>로그인이 필요합니다</h3>
          <p>서비스를 이용하려면 로그인하세요.</p>
          {/* onClick={handleLogin} : 클릭 이벤트 발생했을 때 실행될 함수 객체를 등록 */}
          <button className="login-btn" onClick={handleLogin}>
            로그인
          </button>
        </div>
      )}
      {/* 로그인 되었을 때만 아래 요소 렌더링 
            && 연산자 이용 
        */}
      {isLoggedIn && (
        <div className="welcome-message">
          <p>로그인 성공!</p>
        </div>
      )}

      <div className="debug">
        <p>현재 로그인 상태: {isLoggedIn ? "true" : "false"}</p>
        <p>사용자 이름: {username} </p>
      </div>
    </div>
  );
}

export default LoginSystem;
