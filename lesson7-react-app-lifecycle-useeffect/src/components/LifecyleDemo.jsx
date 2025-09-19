// useEffect hook :  컴포넌트 라이프 사이클(mount -> update -> unmount) 상에서 필요한 순간에 작업 수행하기 위한 hook
import React, { useEffect, useState } from "react";
const LifecyleDemo = () => {
  const [count,setCount] = useState(0);// count 상태를 위한 state hook  

  // 1. 마운트 시에만 실행 (의존성 빈 배열 ) :  componentDidMount
  useEffect(() => {
     // API 호출 , 초기 데이터 설정 등에 사용 
     console.log("1번 useEffect:컴포넌트가 마운트 되었습니다");
     // useEffect cleanup : 언마운트시에 실행할 작업을 화살표 함수로 정의해 리턴한다 
     return () => {
        console.log("1번 useEffect:컴포넌트가 언마운트 됩니다! 정리작업 cleanup을 수행합니다 ");
     }
  },[]);// 빈 의존성 배열 -> 마운트 시에 1회만 실행 
  // 2. 모든 렌더링마다 실행 (의존성 배열 없음 )
  useEffect(() => {
     //거의 사용하지 않음 - 성능 이슈 주의 
     console.log("2번 useEffect:렌더링이 일어났습니다");
  });//의존성 배열을 넣지 않은 상태 
  // 3. 특정 상태 변경시 실행 : componentDidUpdate 
  useEffect(() => {
     //state or props 가 변경시 렌더링 될 때 실행 
     console.log(`3번 useEffect:count가 변경됨: ${count}`);
  },[count]);//의존성 배열을 넣은 상태 




  return (
    <div className="demo-section">
      <h2>useEffect 실행 패턴</h2>

      <div className="control-group">
        <button className="primary-btn" onClick={()=>setCount(count+1)}>카운트 증가:</button>
      </div>
      <div className="info-box">
        <p>콘솔을 열어 useEffect 실행 순서를 확인하세요!</p>
        <p>현재 카운트:{count}</p>
      </div>
    </div>
  );
};
export default LifecyleDemo;
