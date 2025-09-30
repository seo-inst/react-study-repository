import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext"; // Context import

// AuthProviderProvider 컴포넌트 - 실제 인증 상태를 관리하고 제공
export const AuthProvider = ({ children }) => {
  // 인증 상태 관리
  const [user, setUser] = useState(null); // 로그인한 사용자 정보
  const [loading, setLoading] = useState(true); // 초기 로딩 상태

  ////////////////////////////////////////////////////
  ///////////////////////////////////////////////////

  // 로그인 처리 - 사용자 정보 저장
  // 사용자 정보를 상태(state)에 설정하고 로컬 저장소(localStorage)에 저장하는 로그인(login) 과정을 담당
  ////////////////////////////////////////////////////

  // 로그아웃 처리 - 모든 정보 제거
  // 사용자 상태(state)를 초기화하고 로컬 저장소에서 인증 정보(token, user)를 제거하는 로그아웃(logout) 과정을 담당
  /////////////////////////////////////////////////////////

  // Context로 제공할 값
  const value = {

    
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
