import "./App.css";
import Counter from "./components/Counter";
import LikeButton from "./components/LikeButton";

function App() {
  //javascript 영역 : 로직
  return (
    // 화면에 보여질 (렌더링) UI 정보 : JSX 로 정의
    // JSX 영역
    // App.jsx

    <div className="App">
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">React 상태 관리 학습</h1>
          <p className="app-subtitle">
            Props , useState Hook과 이벤트 처리로 상호작용하는 컴포넌트 만들기
          </p>
        </header>

        <main className="app-main">
          <section className="component-section">
            <h2 className="section-title">카운터 컴포넌트</h2>
            <p className="section-description">
              useState를 사용한 숫자 상태 관리
            </p>
            {/* 카운터 컴포넌트를 import 해서 사용   */}
            {/* 
                상위 컴포넌트에서 하위 컴포넌트로 정보를 전달하는 props 를 이용해서 
                여행 카운터 이름을 props 로 전달 
                독서 카운터 이름을 props 로 전달 
            */}
            <Counter counterName="여행" />
            <Counter counterName="독서" />
          </section>

          {/* LikeButton 컴포넌트 섹션 */}
          <section className="component-section">
            <h2 className="section-title">💖 좋아요 버튼</h2>
            <p className="section-description">Props 와 useState 를 이용</p>

            {/* 여러 개의 LikeButton으로 독립적인 상태 확인 */}
            <div className="like-buttons-grid">
               {/* 
                상위 컴포넌트에서 하위 컴포넌트로 정보를 전달하는 props 를 이용해서 
                손흥민 좋아요 컴포넌트 이름을 props 로 전달 
                아이유 좋아요 컴포넌트 이름을 props 로 전달 
                오현규 좋아요 컴포넌트 이름을 props 로 전달 
            */}
              <LikeButton postTitle="손흥민" />
              <LikeButton postTitle="아이유" />
              <LikeButton postTitle="오현규" />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
