import React from "react";
import { useState } from "react";
import "./ProductForm.css";
// 구조분해할당의 부모 App 컴포넌트가 전달한 함수 객체를 받는다
const ProductForm = ({ onSubmit }) => {
  // 상품 등록 폼의 입력 양식의 value 상태를 저장하는 state
  // useState(매개변수인자값) : 상태변수의 초기값
  // useState() 함수의 리턴값 -> 배열 [상태변수, 상태변경함수] 를 반환한다
  // formData : 현재 폼의 상태값
  // setFormData : 상태값이 변경되었을 때 실행하여 리렌더링 되도록 하기 위한 hook 함수
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stockQuantity: "",
    description: "",
  });
  // 상품 등록 버튼을 누르면 실행될 함수를 정의
  // ajax axios 를 이용하는 addProduct 함수를 실행
  const handleSubmit = (e) => {
    e.preventDefault(); // submit 하지 않고 ajax(axios) 로 통신하기 위해 전송 속성을 막아줌
    // 상품 등록 작업
    onSubmit(formData); // App 부모컴포넌트에서 전달한 props 인 onSubmit 함수(addProduct 함수)에 현재 폼데이터를 전달

    // 전달해서 등록한 후에 폼 데이터 state 초기화한다
    // useState hook의 상태함수를 이용
    setFormData({
      name: "",
      price: "",
      stockQuantity: "",
      description: "",
    });
  };
  //폼데이터 상태관리를 위한 함수
  const handleChange = (e) => {
    // e : 이벤트 객체
    setFormData({
      // setFormData : react state hook 함수 : 상태변경시 호출하는 함수 -> react 반영(리렌더링)
      ...formData, // 스프레드 연산자를 이용해 기존 객체 복제 후 추가,업데이트 등의 작업을 해 새 객체를  반환
      [e.target.name]: e.target.value, // 변경되는 입력양식 부분을 업데이트 예  price : 3200
    });
    console.log(
      [e.target.name] + " target name  " + e.target.value + " target value"
    );
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2> 상품 추가</h2>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="상품명"
        required
      />

      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="가격"
        required
      />

      <input
        type="number"
        name="stockQuantity"
        value={formData.stockQuantity}
        onChange={handleChange}
        placeholder="재고수량"
        required
      />

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="상품 설명"
      />
      <button type="submit">상품 등록</button>
    </form>
  );
};

export default ProductForm;
