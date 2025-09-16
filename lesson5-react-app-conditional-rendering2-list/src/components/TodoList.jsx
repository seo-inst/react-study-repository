import { useState } from "react";
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
  // To do list 상태 관리 -> react hook useState
  // to do list 상태 정보를 저장하는 todos 변수 ,  to do list 상태를 변화시키기 위한 함수 setTodos
  // 아래 useState(초기값) 은 실제로는 API Server 연동을 통해 확보하지만 지금은 직접 입력한다 ( JSON Array )
  const [todos, setTodos] = useState([
    { id: 1, text: "점심 먹기", completed: false },
    { id: 2, text: "카드 놀이", completed: true },
  ]);
  // 새로운 to do 입력 상태
  const [newTodo, setNewTodo] = useState("");

  // 할일 to do 추가 함수
  const addTodo = () => {
    if (newTodo.trim()) {
      const todo = {
        id: Date.now(), // 시간정보를 이용해 고유 아이디 생성
        text: newTodo,
        completed: false,
      };
      setTodos([...todos, todo]);//기존배열에 새항목추가한 새배열 생성해 할당 
      setNewTodo('') // 입력창 초기화 
    }
  };

  // 화면 렌더링 : jsx
  return (
    <div className="todo-list">
      <h2>할 일 목록</h2>

      {/* 새 할 일 추가 */}
      <div className="add-todo">
        <input type="text" 
        placeholder="새 할 일을 입력하세요"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => e.key==='Enter' && addTodo()}
        />
        <button onClick={addTodo}>추가</button>
      </div>

      {/* 리스트 렌더링 - map() 메서드 사용 */}
      <ul className="todo-items">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span className="todo-text">{todo.text}</span>
          </li>
        ))}
      </ul>

      {/* to do list 가 비어 있을 때 아래를 보이도록 조건 처리한다  */}
      {todos.length === 0 && <p className="empty-message">할 일이 없습니다!</p>}

      <div className="debug">
        <p>총 할 일: {todos.length}개</p>
      </div>
    </div>
  );
}

export default TodoList;
