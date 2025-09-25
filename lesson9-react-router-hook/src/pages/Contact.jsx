import React from "react";
import "../styles/Pages.css";
const Contact = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>연락처</h1>
        <p className="page-subtitle">React Router 마스터하기</p>
      </div>
      <div className="page-content">
        <h3>React Router 핵심 컴포넌트</h3>
        <div className="contact-grid">
          <div className="contact-item">
            <h4>BrowserRouter</h4>
            <p>전체 앱을 라우팅 가능하게 만드는 컨테이너</p>
          </div>
          <div className="contact-item">
            <h4>Routes & Route</h4>
            <p>URL 경로와 컴포넌트를 매칭하는 설정</p>
          </div>
          <div className="contact-item">
            <h4>Link</h4>
            <p>새로고침 없이 페이지 이동하는 네비게이션</p>
          </div>
        </div>

        <p className="highlight">브라우저의 뒤로가기 버튼도 사용해봅니다</p>
      </div>
    </div>
  );
};

export default Contact;
