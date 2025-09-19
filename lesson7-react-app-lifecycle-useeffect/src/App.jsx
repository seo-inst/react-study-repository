import React, { useState } from "react";
import "./App.css";
import LifecyleDemo from "./components/LifecyleDemo";

const App = () => {
  // 버튼 보이는 상태를 저장하기 위한 useState hook 정의 
  const [showComponent,setShowComponent] = useState(true);

  return (
    <div className="app-container">
      <h2>useEffect 라이프사이클 학습</h2>
      {/* <LifecyleDemo /> */}
      {/* 언마운트 테스트를 위한 버튼 */}
      <button className="toggle-btn" onClick={()=>setShowComponent(!showComponent)}>
        LifecycleDemo 컴포넌트 {showComponent ? '숨기기':'보이기'}
      </button>
      {/* showComponent 상태가 true 일때만 LifecyleDemo를 렌더링 */}
      {showComponent && <LifecyleDemo />}
    </div>
  );
};

export default App;
