import "./TodoList.css";
/*
리스트 렌더링 핵심 포인트:

1. map() 메서드: 배열.map((item) => <JSX key={item.id}>)
   - 배열의 각 요소를 JSX로 변환

2. key prop: React가 리스트를 효율적으로 관리
   - 고유한 값 사용 (id, index 등)
   - key가 없으면 경고 발생

3. 동적 리스트: 상태 변경으로 추가/삭제
   - spread 연산자로 새 배열 생성
   - filter로 항목 제거

이 예제에서 구현해볼 것:
- todos 배열을 map으로 순회하며 li 요소 생성
- 각 li에 key={todo.id} 필수 설정
- 상태 변경시 자동 리렌더링
- 빈 배열일 때 조건부 렌더링
*/
function TodoList() {
  // 로직 : javascript

  // 화면 렌더링 : jsx
  return (
    <div className="todo-list">
      <h2>할 일 목록</h2>

      {/* 새 할 일 추가 */}
      <div className="add-todo">
        <input type="text" placeholder="새 할 일을 입력하세요" />
        <button>추가</button>
      </div>

      {/* 리스트 렌더링 - map() 메서드 사용 */}
      <ul className="todo-items"></ul>

      <p className="empty-message">할 일이 없습니다!</p>

      <div className="debug">
        <p>총 할 일: 개</p>
      </div>
    </div>
  );
}

export default TodoList;
