/*
    React 컴포넌트 
    - 컴포넌트는 UI 를 구성하는 독립적이고 재사용 가능한 부품 
    - React 컴포넌트는 jsx 를 반환 
*/
function Profile() {
  // 컴포넌트 내부에서 사용할 데이터 정의
  // 실제로는 props(외부 전달 정보) 나 state(내부 상태 정보)로 관리하지만
  // 지금은 간단하게 테스트
  const user = {
    name: "조규성",
    job: "축구선수",
    experience: "3년차",
    skills: ["헤더", "슛", "패스"],
  };
  // JSX 로 반환
  return (
    <div style={{ color: "orange" }}>
      <h2>Profile Component</h2>
      <h2>{user.name}</h2>
      <p>{user.job}</p>
      <p>경력: {user.experience}</p>
      <ul>
        {user.skills.map((skill, index) => {
          //key는 React가 각 항목을 추적하기 위한 고유 식별자
          return <li key={index}>{skill}</li>;
        })}
      </ul>
    </div>
  );
}
export default Profile;
