import React from "react";
import { useContext } from "react";
import { MessageContext } from "../contexts/MessageContext";

const ComponentB = () => {
   // 리액트 컨텍스트가 제공한 정보를 받아옴  
  const message = useContext(MessageContext);

  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid #21e36fff",
        marginBottom: "10px",
      }}
    >
      <h3>Component B</h3>
      <p>
        공유된 메시지: <strong>{message}</strong>
      </p>
    </div>
  );
};

export default ComponentB;
