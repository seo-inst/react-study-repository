import { Container, Row, Col, Button } from "react-bootstrap";

function App() {
  return (
    //vh-100 : viewport height  컨테이너 높이를 뷰포트 높이로 설정
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <header className="text-center">
        <div className="d-none d-md-block">
        <h1>리액트 부트스트랩 예제</h1>
        </div>
        {/* md 미만에서는 보이고 md 이상에서는 안보이게 한다  */}
        <div className="d-md-none"> 
        <h3>리액트 부트스트랩 예제</h3>
        </div>
      </header>
    </Container>
  );
}
export default App;
