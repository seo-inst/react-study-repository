// 설치: npm install react-router-dom

// ============================================
// 1. App.jsx - 메인 라우터 설정

// 개발 단계
// 1. useNavigate() - 버튼 클릭으로 페이지 이동
// 2. useParams() - 상품 ID로 상세 정보 표시
// 3. useLocation() - 현재 위치 정보 활용
// ============================================
import React from "react";
import "./styles/App.css";
import Navbar from "./components/common/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        {/* 
         Navbar 에는 아래와 같은 Link to 가 명시되어 있음 
        <Link to="/" className={isActive('/')}>홈</Link>
        <Link to="/products" className={isActive('/products')}>상품</Link>
        <Link to="/search" className={isActive('/search')}>검색</Link>
        */}
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* 새로운 라우트 추가 */}
            {/* 404 페이지 - 모든 경로 매칭 */}
            <Route path="*" element={<NotFound />} />

            {/* 상품 목록 페이지 */}
            <Route path="/products" element={<Products />} />

            {/* 동적 라우팅 - :id는 변수처럼 동작 */}
            {/* useParams()로 이 값을 읽을 수 있음 */}
            <Route path="/product/:id" element={<ProductDetail />} />

            {/* 검색 페이지 - 쿼리 파라미터 활용 */}
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
