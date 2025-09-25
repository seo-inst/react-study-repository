import React from "react";
import "../../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  // 현재 위치를 확인하여 활성 메뉴 표시
  const location = useLocation(); // 현재 위치를 알수 있는 router hook
  // 현재 경로와 일치하는 링크 스타일 변경
  const isActive = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>React Router Hook Study</h2>
      </div>

      <div className="navbar-links">
        <Link to="/" className={isActive("/")}>
          홈
        </Link>
        <Link to="/products" className={isActive("/products")}>
          상품
        </Link>
        <Link to="/search" className={isActive("/search")}>
          검색
        </Link>
        <Link to="/about" className={isActive("/about")}>
          소개
        </Link>
        <Link to="/contact" className={isActive("/contact")}>
          연락처
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
