import "./Card.css"
/*
    부모 컴포넌트인 App.jsx 에서 전달하는 Pros 정보를 받는 자식 Card 컴포넌트 
    방식 :  function 컴포넌트(props){
                //pros.속성명으로 접근 
            }
*/
function Card(props){
    return (
      <div className="card-container">
      <span className="card-category">
       
      </span>
      <img     
        className="card-image"
      />
      <div className="card-content">
        <h3 className="card-title"></h3>
        
        <p className="card-description"></p>        
        
        <p className="card-meta"></p>
       
        <p className="card-meta"></p>       
      </div>
    </div>
    )
}
export default Card;