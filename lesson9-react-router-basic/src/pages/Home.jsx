import React from "react";
import "../styles/Pages.css";
const Home = () => {
  return (
    //pages/Home.jsx
    <div className="page-container">
      <div className="page-header">
        <h1>환영합니다!</h1>
        <p className="page-subtitle">React Router로 만든 홈페이지</p>
      </div>

      <div className="page-content">
        <h3>React Router</h3>
        <ul>
          <li>페이지 새로고침 없이 빠른 이동</li>
          <li>브라우저 뒤로가기/앞으로가기 지원</li>
          <li>URL 공유 가능</li>
          <li>Single Page App의 핵심 기능</li>
        </ul>

        <p className="highlight">
          위 네비게이션을 클릭해도 페이지가 새로고침되지 않습니다
        </p>
      </div>
    </div>
  );
};

export default Home;
