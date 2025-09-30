// config/apiConfig.js
import axios from "axios";
/*
    ajax 를 위한 axios interceptor 를 구성 
    axios interceptor 는 프론트 리액트의 모든 request 와 response 를 
    가로채어서 공통 업무를 적용하는 역할을 함. 
    공통 업무란 request 시에 
    request message header에  content-type : application/json 을 명시하고
    Authorization name에 JWT 토큰 정보를 저장해서 함께 전송하는 공통 업무 
    또한  response 시에  401(인증에러) 또는 403(인가 or 권한에러) 에러 발생시 
    localStorage 에 token 과 user를 삭제하고 로그인 페이지로 이동시키는 공통 업무     
*/

// 1. axios 인스턴스 생성 및 기본 설정
const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: { "Content-Type": "application/json" },
});
// 2. request 요청 인터셉터 설정
/*
    요청 인터셉터 - API 호출 직전에 가로채서 공통 로직(JWT 토큰추가)을 추가합니다 
    api.interceptors.request.use(성공처리함수,실패처리함수);
    구체적으로는 아래와 같음 
    api.interceptors.request.use((config)=>{성공처리},(error)=>{실패처리});
*/
api.interceptors.request.use(
  (config) => {
    //요청이 API 서버에 전달되기 직전에 실행, LocalStorage에서 JWT 토큰을 가져와
    // http request header 에 Authorization 이름으로 JWT를 추가
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config; // config 객체를 전달
  },
  (error) => {
    return Promise.reject(error);
  } // 오류를 프로미스 객체로 반환해서 API 호출 코드의  catch 블록으로 전달
);
/*
    response 응답 인터셉터 - http response status error code  401 인증 / 403 인가 에러 처리
    성공함수는 그대로 반환 
    실패함수에 공통기능을 적용 
*/
// 응답 인터셉터 - 401/403 에러 처리 (토큰 만료)
api.interceptors.response.use(
  (response) => response, // 성공 시 그대로 반환
  (error) => {
    // 응답 실패(4xx, 5xx 등) 시에만 실행됩니다
    const status = error.response?.status;

    // 리다이렉션을 건너뛸 특정 URL 패턴
    const EXCLUDE_REDIRECT_URL = "/api/auth/login";
    // 인증 오류 (401/403) 처리 로직
    if (status === 401 || status === 403) {
      // 요청 설정(config)에서 요청 URL과 HTTP 상태 코드(status) 추출
      const originalRequestUrl = error.config?.url;

      console.warn("인증/인가 Error (401/403). Redirecting to login.");
      // 사용자에게 알림
      //alert("사용자 인증이 필요합니다. 다시 로그인해주세요.");
      // 1. 인증 정보 제거: 잘못된(만료된) 토큰과 사용자 정보를 로컬 저장소에서 제거
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      // 2. 페이지 이동: 사용자에게 재로그인을 요청하기 위해 로그인 페이지로 강제 리다이렉트

      //현재 요청 URL이 리다이렉트를 건너뛸 URL인지 확인
      const isLoginRequest = originalRequestUrl?.includes(EXCLUDE_REDIRECT_URL);

      if (!isLoginRequest) {
        window.location.href = "/login";
      } else {a
        // 로그인 요청일 경우 리다이렉션은 건너뛰고 경고만 표시
        console.log(
          `Login API (${originalRequestUrl}) failed with ${status}. Redirect skipped.`
        );
      }
    }
    // 인증 오류를 포함하여 발생한 모든 오류를 프로미스로 반환하여 해당 API 호출의 catch() 블록으로 전달
    // 이렇게 해야 호출한 쪽에서 추가적인 오류 처리(예: 특정 필드 에러 처리)를 할 수 있음
    return Promise.reject(error);
  }
);
export default api;
