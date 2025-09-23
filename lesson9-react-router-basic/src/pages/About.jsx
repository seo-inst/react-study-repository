import React from "react";
import "../styles/Pages.css";

const About = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>소개 페이지</h1>
        <p className="page-subtitle">React Router 학습 중입니다</p>
      </div>

      <div className="page-content">
        <h3>SPA (Single Page Application)란?</h3>
        <div className="info-box">
          <p>
            <strong>핵심 개념</strong>
          </p>
          <p>• 하나의 HTML 파일로 여러 "페이지" 구현</p>
          <p>• JavaScript가 화면 내용을 동적으로 변경</p>
          <p>• 서버 요청 없이 빠른 페이지 전환</p>
        </div>

        <p className="highlight">
          현재 URL을 확인해보세요: <code>/about</code>
        </p>
      </div>
    </div>
  );
};

export default About;
