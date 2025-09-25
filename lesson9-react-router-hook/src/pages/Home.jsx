import React from "react";
import "../styles/Pages.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // state 를 이용한 navigate
  // 페이지 이동시 데이터 전달가능
  // 받는 쪽에서는  useLocation().state 로 접근하면 됨
  const handleGoToProducts = () => {
    navigate("/products",{state:{
      from : "home",
      message : "홈에서 왔습니다"
    }});
  };

  return (
    <div className="page-container">
      <h1>환영합니다!</h1>
      <p>React Router의 핵심 Hook을 공부해봐요</p>

      <div className="button-group">
        <button onClick={()=> navigate("/about")}>소개 페이지로</button>
        <button onClick={handleGoToProducts}>상품 보러가기 (state 전달)</button>
        <button>React 검색하기</button>
      </div>

      <div className="info-box">
        <h3>React Router 핵심 Hook</h3>
        <ul>
          <li>
            <strong>useParams():</strong> URL 파라미터 읽기
          </li>
          <li>
            <strong>useNavigate():</strong> 프로그래밍적 이동
          </li>
          <li>
            <strong>useLocation():</strong> 현재 위치 정보
          </li>
          <li>
            <strong>useSearchParams():</strong> 쿼리 파라미터 관리
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
