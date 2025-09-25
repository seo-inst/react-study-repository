// ============================================
// 4. pages/Search.jsx - useLocation() 학습
// ============================================
import React, { useState } from "react";
import "../styles/Pages.css";
import { useLocation, useNavigate } from "react-router-dom";

const Search = () => {
  // 현 컴포넌트 keyword 정보를 전체 react에 반영하기 위한 useState hook -> 내부 상태 변경
  // keyword 상태변수 , setKeyword 상태변경함수
  const [keyword, setKeyword] = useState(""); // "" 초기값
  const navigate = useNavigate();
  //  useLocation Hook
  // - 현재 위치(location) 객체 반환
  // - pathname: 현재 경로
  // - search: 쿼리 문자열 (?q=검색어)
  // - hash: 해시 (#section)
  // - state: navigate로 전달된 state
  const location = useLocation();
  // URLSearchParams로 쿼리 파라미터 변환(parsing)
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${keyword}`);
  };

  return (
    <div className="page-container">
      <h1>검색 페이지</h1>

      {/* 현재 location 정보 표시 */}
      <div className="info-box">
        <p>
          <strong>pathname:</strong>
          {location.pathname}
        </p>
        <p>
          <strong>search:</strong>
          {location.search || "없음"}
        </p>
        <p>
          <strong>검색어:</strong>
          {searchQuery || "없음"}
        </p>
      </div>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <button type="submit">검색</button>
      </form>

      {searchQuery && (
        <div className="search-result">
          <h3>{searchQuery} 검색 결과</h3>
          실제로는 ajax axios 통신으로 정보를 조회해옴
        </div>
      )}
    </div>
  );
};

export default Search;
