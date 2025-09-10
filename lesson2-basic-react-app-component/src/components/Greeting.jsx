// GreetingComponent
function Greeting(){
    const currentHour = new Date().getHours();

    const getGreetingMessage = () => {
        if(currentHour <12)
            return "좋은 아침";
        else if(currentHour < 18)
            return "행복한 점심";
        else 
            return "편안한 저녁";
    }
    // 화면에 그려질 jsx 영역 
    return (
        <div style={{color:"blue"}}>
            {/* jsx 주석 영역 :  */}
            <h2>Greeting Component</h2>
            <h2>현재 시간 {currentHour}시</h2>
            <h3>{getGreetingMessage()}</h3>
        </div>
    );
}
export default Greeting;