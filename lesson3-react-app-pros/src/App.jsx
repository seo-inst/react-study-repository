import "./App.css";
/*
  React Props : 부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달하는 기술 
                자식 컴포넌트에서는 읽기 전용으로만 사용가능 
  - 블로그 포스트 목록 
  - 쇼핑몰 상품카드 
  - 게시판 글 목록 등에서 사용될 수 있음               
*/
function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>학습 카드 갤러리</h1>
        <p>Props를 활용한 재사용 가능한 Card 컴포넌트</p>
      </header>
      <div className="card-grid">

      </div>
    </div>
  );
}
export default App;
