// ============================================
// pages/ProductDetail.jsx - useParams() 학습
// ============================================
import React from "react";
import "../styles/Pages.css";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  // URL 의 동적 파라미터 값을 가져옴
  // /product/:id 에서 :id 부분의 값을 받아옴
  const { id } = useParams();
  const navigate = useNavigate();

  // 실제로는 id를 사용해 API 호출로 데이터 조회
  const productData = {
    1: { name: "맥북", price: 1500000, desc: "고성능  노트북" },
    2: { name: "갤럭시25", price: 1200000, desc: "최신 플래그십 모델" },
    3: { name: "아이패드", price: 800000, desc: "휴대성 좋은 태블릿" },
  };

  const product = productData[id];

  // 상품이 없는 경우 처리
  if (!product) {
    return (
      <div className="page-container">
        <h2>상품을 찾을 수 없습니다</h2>
        <button onClick={() => navigate("/")}>상품 목록으로</button>
      </div>
    );
  } else {
    // 상품 있는 경우 처리
    return (
      <div className="page-container">
        <h1>상품 상세 정보</h1>
        {/* useParams로 받은 id 표시 */}
        <div className="info-box">
          <p>
            <strong>상품 ID:</strong>{id}
          </p>
          <p>
            <strong>URL 파라미터:</strong>/product/{id}
          </p>
        </div>
        <div className="product-detail">
          <h2>{product.name}</h2>
          <p className="price">{product.price}원</p>
          <p className="desc">{product.desc}</p>
          <div className="button-group">
            <button onClick={()=> navigate(-1)}>뒤로가기</button>
            <button onClick={()=> navigate("/products")}>목록으로</button>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetail;
