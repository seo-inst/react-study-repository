import "./App.css";
import Card from "./components/Card";
/*
  React Props : 부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달하는 기술 
                자식 컴포넌트에서는 읽기 전용으로만 사용가능 
  - 블로그 포스트 목록 
  - 쇼핑몰 상품카드 
  - 게시판 글 목록 등에서 사용될 수 있음               
*/
function App() {
  // jsx : 화면 렌더링될 정보를 리턴
  return (
    <div className="app">
      <header className="app-header">
        <h1>학습 카드 갤러리</h1>
        <p>Props를 활용한 재사용 가능한 Card 컴포넌트</p>
      </header>
      <div className="card-grid">
        {/* jsx 주석 */}
        <Card
          category="React"
          title="컴포넌트와 Props"
          description="React 핵심 개념인 컴포넌트와 Prop를 학습"
          author="손흥민"
          date="2025-9-10"
          image="https://picsum.photos/400/300?random=1"
        />
        <Card
          category="Javascript"
          title="ES6+ 문법정리"
          description="화살표함수,구조분해할당,스프레드연산자 등"
          author="조규성"
          date="2025-9-10"
          image="https://picsum.photos/400/300?random=2"
        />
        {/* 
            선택적 Props 전달 
            - author props 를 전달하지 않음 
            - Card 컴포넌트에서 전달되지 않은 값을 처리 ( 존재할때만 렌더링)
        */}
        <Card
          category="CSS"
          title="CSS와 React Bootstrap"
          description="React Bootstrap Grid system으로 반응형 웹을 구현"
          date="2025-9-10"
          image="https://picsum.photos/400/300?random=3"
        />
        {/* 
          author 와 date 를 전달하지 않고 Card 컴포넌트 jsx 조건식 테스트 
        */}
        <Card
          category="React와 state"
          title="React state로 내부 상태 변화 반영"
          description="React state hooks로 내부 상태 변경시 렌더링하도록 구현"          
          image="https://picsum.photos/400/300?random=4"
        />
        {/* 
            최소한의 정보만 전달, 이번에는 category 도 전달하지 않아본다 
            Card Component 에서 category 정보가 없으면 일반이라고 조건문을 이용해 처리하도록 하고 테스트 
        */}
        <Card 
            title="JPA 학습"
            description="N+1 문제 해결을 위한 JPQL Fetch Join을 학습합시다"
            image="https://picsum.photos/400/300?random=5"
        />
      </div>
    </div>
  );
}
export default App;
