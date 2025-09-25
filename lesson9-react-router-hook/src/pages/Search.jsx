// ============================================
// 4. pages/Search.jsx - useLocation() 학습
// ============================================
import React, { useState } from "react";
import '../styles/Pages.css'

const Search = () => {
  
  //  useLocation Hook
  // - 현재 위치(location) 객체 반환
  // - pathname: 현재 경로
  // - search: 쿼리 문자열 (?q=검색어)
  // - hash: 해시 (#section)
  // - state: navigate로 전달된 state

  
  return (
    <div className="page-container">
      <h1>검색 페이지</h1>
      
      {/* 현재 location 정보 표시 */}
      <div className="info-box">
        <p><strong>pathname:</strong> </p>
        <p><strong>search:</strong> </p>
        <p><strong>검색어:</strong> </p>
      </div>
      
      <form >
        <input 
          type="text"          
          placeholder="검색어를 입력하세요"


        />
        <button type="submit">검색</button>
      </form>
      
      {searchQuery && (
        <div className="search-result">
          <h3> 검색 결과</h3>         
        </div>
      )}
    </div>
  );
};

export default Search;