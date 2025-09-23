// components/ProductList.jsx

import { useEffect } from "react";
import "./ProductList.css";
// 부모 컴포넌트 App.jsx 에서 props 로 전달한 상품리스트를 구조분해할당 방식으로 전달받는다
const ProductList = ({ products }) => {
  // 아래는 debug 용도로 products props 가 변경되었을 때 로깅 되도록 useEffect 를 이용
  useEffect(() => {
    console.log(`상품 목록 업데이트:${products.length}`);
  }, [products]); // products 가 변경될 때마다 실행 ( lifecycle mount -> update - unmount 중 update 에 해당)
  if (products.length === 0) {
    return <div className="empty">상품이 없습니다</div>;
  }

  return (
    // 상품 리스트를 보여주는 영역
    <div className="product-list">
      <h2>상품 목록 {products.length}개</h2>     
      {products.map((product) => {
        return (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.price}원</p>
            <p>재고:{product.stockQuantity}개</p>
          </div>
        );
      })}
    </div>
  );
};
export default ProductList;
