import { useState } from "react";
import "./Counter.css";
/*
    React State Hook 동작 과정 
    1. hook 함수인 setCount(count+1) 호출 
    2. React 가 상태 변경을 감지 
    3. 컴포넌트 함수를 다시 실행 (리렌더링)
    4. 새로운 count 즉 상태값으로 화면 업데이트 

*/
function Counter() {
  //let count = 0;
  // 초기값 0의 의미는 컴포넌트가 처음 렌더링 될때 상태값
  // count : 현재 상태값을 저장하는 변수
  // setCount : 상태 변경 함수 -> 상태를 변경할 때 사용하는 함수
  // useState Hook 은  const [상태변수,상태변경함수] =useState(초기값)
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    // count = count + 1; // 이렇게 변수에 정보를 변경한다고 실제 화면에 반영되는 것은 아니다
    // 변경하기 위해서는 React useState Hook 으로 상태를 관리해야 화면에 반영된다
    setCount(count + 1); // 리액트와 연결된 state hook 함수를 이용해 상태를 업데이트한다
    console.log("increment " + count);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="counter">
      <h2>카운터:{count}</h2>
      <div className="buttons">
        <button onClick={handleDecrement}>-1</button>
        <button onClick={handleReset}>리셋</button>
        {/* JSX 이벤트 핸들러 연결 : onClick=함수객체 : 클릭되었을때 실행될 함수객체 등록 */}
        <button onClick={handleIncrement}>+1</button>
      </div>
      {/* 학습용 디버그 정보 */}
      <div className="debug">
        <p>현재 상태값: {count}</p>
        <p>컴포넌트 렌더링 시간: {new Date().toLocaleTimeString()} </p>
      </div>
    </div>
  );
}

export default Counter;
