// ============================================
// 2. pages/Products.jsx - useNavigate() 학습
// ============================================
import React, { useEffect } from "react";
import "../styles/Pages.css";
import { useLocation, useNavigate } from "react-router-dom";
// import

const Products = () => {
  //  useNavigate Hook
  // - 프로그래밍적으로 페이지를 이동할 때 사용
  // - Link 컴포넌트 없이 JavaScript로 라우팅 제어
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(location.state);
    if (location.state) {
      console.log(`메세지: ${location.state?.message}`); // 옵셔널 체이닝으로 접근해 존재하면 실행
    }
  }, [location]); // useEffect 의 두번째 인자 의존성 배열 정보 변경시 실행

  // 샘플 상품 데이터
  const products = [
    { id: 1, name: "노트북", price: 1500000 },
    { id: 2, name: "스마트폰", price: 1200000 },
    { id: 3, name: "태블릿", price: 800000 },
  ];

  // navigate() 사용법
  // 1. 절대 경로: navigate('/product/1')
  // 2. 상대 경로: navigate('detail')
  // 3. 뒤로가기: navigate(-1)
  // 4. 앞으로가기: navigate(1)
  // 상품 클릭 핸들러 구현해 활용해봄
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="page-container">
      <h1>상품 목록</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => {
              handleProductClick(product.id);
            }}
          >
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

      {/* navigate 다양한 활용  */}
      <div className="button-group">
        <button onClick={() => navigate("/")}>홈으로</button>
        <button onClick={() => navigate(-1)}>뒤로가기</button>
      </div>
    </div>
  );
};

export default Products;
