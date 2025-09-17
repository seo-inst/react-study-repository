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
  // To do 항목 삭제 함수 
  const deleteTodo = (id) => {
    //console.log("삭제할 to do id "+id);
    // to do list 중 해당 id 를 가진 to do 요소를 삭제하고 to do list를 리렌더링하기 위해서는 react hook state를 이용해야 함 => 변경 위해서는 useState hook 함수가 반환한 두번째 요소인 set계열 함수를 이용해 업데이트해야 한다
    // filter 함수는 todo.id != id 이 true 이면 새 배열 요소로 추가
    // 다시 말하면 삭제할 to do id 이면 != 에 의해 false 가 나올 것이고 이는 새 배열 요소에서 제외됨 -> 즉 삭제 효과  
    setTodos(todos.filter((todo)=> todo.id != id)); 
  }

  // 화면 렌더링 : jsx
  return (
    <div className="todo-list">
      <h2>할 일 목록</h2>

      {/* 새 할 일 추가 */}
      <div className="add-todo">
        <input type="text" 
        placeholder="새 할 일을 입력하세요"
        value={newTodo} // 입력 폼 요소 값 value를 리액트 state 상태 값으로 관리 
        onChange={(event) => setNewTodo(event.target.value)} // 입력 요소 value 가 change 변경될 때 react state hook 의 함수로 상태를 변경 -> 앱에 리렌더링 
        //아래는 key를 눌렀을 때 발생하는 이벤트 
        
        // keyDown 이벤트 발생시 실행될 화살표 함수 arrow function 를 등록 binding 
        // addTodo 가 아니라 addTodo() 로 명시한 이유는 엔터키 이벤트 발생시에 바로 호출 즉 실행되어 todo 를 추가하기 위해 즉 구현부 내에서는 실행을 해야 하므로 반드시 () 를 명시해야 됨  
        onKeyDown={(event) => event.key==='Enter' && addTodo()}
        />
        {/* 아래는 버튼이 클릭되어지면 (클릭이벤트) 실행될 함수를 binding 등록 */}
        <button onClick={addTodo}>추가</button>
       
      </div>

      {/* 리스트 렌더링 - map() 메서드 사용 */}
      <ul className="todo-items">
        {todos.map((todo) => (
          // 리액트 리스트에서는 key 를 반드시 설정해야 함 -> 오류 방지 및 성능 향상 
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed':undefined}`}>
            <span className="todo-text">{todo.text}</span>
            {/* 삭제 버튼이 클릭되면(클릭이벤트발생시) 실행될 화살표함수를 등록 
                이후 삭제 버튼을 클릭하면 함수 구현부에서 deleteTodo 함수를 실행하여 to do item을 삭제 
            */}
            <button className="delete-btn" onClick={()=> deleteTodo(todo.id)}>삭제</button>
            {/* 
                    const deleteTodo = (id) => {
                      console.log("삭제할 to do id "+id);
                      setTodos(todos.filter((todo)=> todo.id != id)); 
                    }
            */}
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
