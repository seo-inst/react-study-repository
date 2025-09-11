import { Container, Row, Col, Button } from "react-bootstrap";

function App() {
  return (
    //아래는 중앙정렬, vh-100 : viewport height  컨테이너 높이를 뷰포트 높이로 설정
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <header className="text-center">
        {/* 
            d-none : display none 기본적으로 요소를 숨김
            d-md-block : md 768px 태블릿 이상의 화면에서만 h1 문자열이 보이도록 설정 
        */}
        <div className="d-none d-md-block">
          {/*  mb-4 : margin bottom 아래쪽 마진을 4로 준다 */}
          <h1 className="mb-4">리액트 부트스트랩 예제</h1>
        </div>
        {/* md 미만에서는 보이고 md 이상에서는 안보이게 한다  */}
        <div className="d-md-none">
          <h3 className="mb-4">리액트 부트스트랩 예제</h3>
        </div>
        {/* 
              부트 스트랩 그리드 : 행 row과 열 col로 구성
              {1} => props 을 통한 반응형 설정 
              xs={1} : 가장 작은 모바일 화면에서는 한 줄에 하나의 열만 표시
              sm={3} : small 576px 화면 이상에서는 한 줄에 3개의 열을 나란히 표시  
              className="g-3"  그리드 시스템에서 간격 gutter 을 조절하는 클래스 g-5까지  

              참고 : 부트스트랩 12개의 열 column 으로 구성 
                    Col 을 3개로 구성하면 12/3 = 4의 너비를 자동으로 차지 
        */}
        <Row xs={1} sm={3} className="g-3">
          <Col>
            {/* w-100 : width를 100 %로 설정 */}
            <Button variant="primary" className="w-100">
              기본 버튼
            </Button>
          </Col>
          <Col>           
            <Button variant="success" className="w-100">
              성공 버튼
            </Button>
          </Col>
          <Col>           
            <Button variant="danger" className="w-100">
              위험 버튼
            </Button>
          </Col>
          <Col>           
            <Button variant="info" className="w-100">
              Info 버튼
            </Button>
          </Col>
          <Col>           
            <Button variant="light" className="w-100">
              Light 버튼
            </Button>
          </Col>
          <Col>           
            <Button variant="Dark" className="w-100">
              Dark 버튼
            </Button>
          </Col>
        </Row>
      </header>
    </Container>
  );
}
export default App;
