/*
        리액트 컴포넌트에서 children 은 컴포넌트 태그 사이에 포함된 모든 컨텐트를 나타내는 특별한 prop 
        App.jsx 에서는  
        <TabButton>
         MyComponents // children prop 의 값으로 전달          
        </TabButton>
*/
function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined}onClick={onSelect}>{children}</button>
    </li>
  );
}
export default TabButton;
