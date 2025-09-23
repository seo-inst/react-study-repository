import React from "react";
import { MessageContext } from "./contexts/MessageContext";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";

const App = () => {
  const sharedMessage =
    "Hello React Context, MessageContext Provider내의 모든 컴포넌트들이 자원을 공유함";

  return (
    <div className="App">
      <h1>React Context 기초</h1>
      <p>아래 컴포넌트들은 Context Provider를 통해 메시지를 사용할 수 있음</p>
      {/*  아래 Provider는 방송국 역할 children component 자식 컴포넌트에 
            sharedMessage 를 공유 
      */}
      <MessageContext.Provider value={sharedMessage}>
        <ComponentA />
        <ComponentB />
      </MessageContext.Provider>
    </div>
  );
};

export default App;
