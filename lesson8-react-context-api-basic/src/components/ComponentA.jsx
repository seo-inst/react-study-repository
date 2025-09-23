import React from "react";
import { useContext } from "react";
import { MessageContext } from "../contexts/MessageContext";
// 이 컴포넌트는 MessageContext 의 MessageProvider 가 제공한 정보를 제공받을 수 있는
// Consumer 컴포넌트임 ( children 컴포넌트이므로 )
const ComponentA = () => {
  // useContext hook 에 MessageContext 를 전달하여 컨텍스트가 공유한 값을 가져옴
  const message = useContext(MessageContext);

  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        marginBottom: "10px",
      }}
    >
      <h3>Component A</h3>
      <p>
        공유된 메시지: <strong>{message}</strong>
      </p>
    </div>
  );
};

export default ComponentA;
