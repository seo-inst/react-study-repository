import React from "react";
import '../styles/Sidebar.css'
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <aside className={`sidebar ${theme}`}>
      <h3> Sidebar</h3>

      <nav className="sidebar-nav">
        <div className="nav-item">홈</div>
        <div className="nav-item">프로필</div>
        <div className="nav-item">설정</div>
        <div className="nav-item">도움말</div>
      </nav>

      <div className="sidebar-info">
        <p>
          현재 테마: <strong>{theme}</strong>
        </p>
        <p>Header와 동일한 데이터!</p>
      </div>
    </aside>
  );
};

export default Sidebar;
