import "./App.css";
import ModernCard from "./components/ModernCard";

function App() {
  // 화면 렌더링 될 JSX 를 리턴
  return (
    <div className="app-container">
      <h1 className="app-title">React Props 학습</h1>
      <p className="app-subtitle">구조 분해 할당으로 더 깔끔한 코드 작성하기</p>
      <div className="card-grid">
        <ModernCard 
          title="리액트 기초"
          description="컴포넌트와 Prop 기본을 학습"
          category="프론트엔드"
          author="손흥민"
          date="2025-09-11"
          image="https://picsum.photos/400/300?random=1"
          isNew={true}
        />
         <ModernCard 
          title="Spring JPA"
          description="ORM JPA Hibernate"
          category="백엔드"
          author="오현규"
          date="2025-09-11"
          image="https://picsum.photos/400/300?random=2"          
        />
        {/* 최소 props 만 전달  */}
         <ModernCard 
          title="OpenAPI/Swagger"
          description="REST API 서버 명세서"    
          image="https://picsum.photos/400/300?random=3"          
        />
      </div>
    </div>
  );
}

export default App;
