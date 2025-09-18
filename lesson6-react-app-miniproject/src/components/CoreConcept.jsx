/*
    CoreConcept 컴포넌트 
    - Props : 부모 컴포넌트에서 자식 컴포넌트로 정보를 전달 ,  자식 컴포넌트에서는 구조분해할당 destructuring 받아서 처리 
    - 컴포넌트 재사용성 연습을 위해 CoreConcept 컴포넌트를 정의 
*/
function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
export default CoreConcept;
