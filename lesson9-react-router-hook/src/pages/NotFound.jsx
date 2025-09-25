import React from "react";
import "../styles/Pages.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <h1>404 - 페이지를 찾을 수 없습니다</h1>
      <p>요청하신 페이지가 존재하지 않습니다.</p>

      <div className="button-group">
        <button onClick={() => navigate("/")}>홈으로</button>
        <button onClick={() => navigate(-1)}>이전 페이지로</button>
      </div>
    </div>
  );
};

export default NotFound;
