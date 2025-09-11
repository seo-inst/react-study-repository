import "./ModernCard.css";

// ES 6 문법 구조 분해 할당 (Destructuring) 을 이용한 Prop 전달 받기
function ModernCard({
    title,
    description,
    image,
    category="일반", // 기본값 일반으로 설정 
    author,
    date,
    isNew
}) {
  return (
    <div className="modern-card">
    {/*  NEW 배지 - 조건부 렌더링 */}
     {isNew && <span className="modern-card__badge">NEW</span>  } 
      <span className="modern-card__category">{category}</span>
      <img className="modern-card__image" src={image} />
      <div className="modern-card__content">
        <h3 className="modern-card__title">{title}</h3>
        <p className="modern-card__description">{description}</p>
        <div className="modern-card__meta">
        {author && <span>작성자:{author} </span>}
        {date && <span>날짜:{date} </span>}        
        </div>
      </div>
    </div>
  );
}

export default ModernCard;
