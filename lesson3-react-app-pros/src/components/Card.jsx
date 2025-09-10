import "./Card.css";
/*
    부모 컴포넌트인 App.jsx 에서 전달하는 Pros 정보를 받는 자식 Card 컴포넌트 
    방식 :  function 컴포넌트(props){
                //pros.속성명으로 접근 
            }
*/
function Card(props) {
  return (
    <div className="card-container">
    <span className="card-category">
    {/* props.category가 있으면 그 값 사용, 없으면(undefined,null,빈문자열) "일반" 사용 */}
        {props.category || "일반" }
    </span>
      <img className="card-image" src={props.image} alt={props.title} />
      <div className="card-content">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-description">{props.description}</p>
        {/* 
            선택적 Props - 조건부 렌더링 (&& 연산자)
            props.author가 존재할 때만 렌더링 
        */}
        {props.author && <p className="card-meta">작성자: {props.author}</p>}
        {props.date && <p className="card-meta">작성일: {props.date}</p>}    
        
      </div>
    </div>
  );
}
export default Card;
